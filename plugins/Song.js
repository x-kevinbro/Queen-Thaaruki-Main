/*
YOUTUBE MP3 DOWNLOADER PLUGIN
Created by : denethdev®
Modified for: Zoro MD
*/

const { cmd } = require('../command');
const yts = require('yt-search');
const ddownr = require('denethdev-ytmp3');

cmd({
    pattern: "song",
    desc: "Download YouTube songs as MP3 (via name or link).",
    category: "download",
    react: '🎧',
    use: '<song name or YouTube URL>',
    filename: __filename
}, async (m, ctx, quoted, { from, reply, q }) => {
    try {
        if (!q) return reply("❌ Provide a YouTube URL or search term.");

        let video;
        const isUrl = q.startsWith("http");

        if (isUrl) {
            const videoId = new URL(q).searchParams.get("v") || q.split('/').pop();
            const result = await yts({ videoId });
            if (!result?.title) return reply("❌ Video not found.");
            video = result;
        } else {
            const search = await yts(q);
            if (!search.videos.length) return reply("❌ No results.");
            video = search.videos[0];
        }

        await reply(`*Downloading...*\n${video.title}.mp3`);

        const { downloadUrl } = await ddownr.download(video.url, 'mp3');
        if (!downloadUrl) return reply("⚠️ Download link error.");

        // Send YouTube rich preview
        await m.sendMessage(from, {
            text: video.title,
            contextInfo: {
                externalAdReply: {
                    title: video.title,
                    body: "BY ZORO MD",
                    thumbnailUrl: video.thumbnail,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    showAdAttribution: true,
                    sourceUrl: video.url
                }
            }
        }, { quoted });

        // Send audio
        await m.sendMessage(from, {
            audio: { url: downloadUrl },
            mimetype: 'audio/mpeg',
        }, { quoted });

    } catch (err) {
        console.error("Zoro MD Plugin Error:", err);
        reply("❌ Something went wrong. Try again.");
    }
});
