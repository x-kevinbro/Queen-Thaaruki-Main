/*
ʏᴏᴜᴛᴜʙᴇ ᴍᴘ3 ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴘʟᴜɢɪɴ
ᴄʀᴇᴀᴛᴇᴅ ʙʏ : ᴅᴇɴᴇᴛʜᴅᴇᴠ®
ᴘʟᴇᴀꜱᴇ ᴅᴏɴᴛ ʀᴇᴍᴏᴠᴇ ᴏᴡɴᴇʀ ᴄʀᴇᴅɪᴛꜱ 😁
*/

const { cmd } = require('../command');
const yts = require('yt-search');
const ddownr = require('denethdev-ytmp3'); // Importing the denethdev-ytmp3 package for downloading

cmd({
    pattern: "denuwan",
    desc: "Download songs from YouTube.",
    category: "download",
    react: '🎧',
    use: '<song name or url>',
    filename: __filename
}, async (messageHandler, context, quotedMessage, { from, reply, q }) => {
    try {
        if (!q) return reply("Please Provide A Song Name or Url 🙄");

        let songData;
        if (q.startsWith('http') && q.includes('youtube.com')) {
            // If the query is a YouTube URL, use it directly
            const result = await yts({ videoId: q.split('v=')[1] });
            if (!result || !result.title) {
                return reply("Invalid YouTube URL or video not found 🧐");
            }
            songData = result;
        } else {
            // Search for the song using yt-search
            const searchResults = await yts(q);
            if (!searchResults || searchResults.videos.length === 0) {
                return reply("No Song Found Matching Your Query 🧐");
            }
            songData = searchResults.videos[0]; // Take the first result
        }

        const songUrl = songData.url;

        try {
            // Using denethdev-ytmp3 to fetch the download link
            const result = await ddownr.download(songUrl, 'mp3'); // Download in mp3 format
            const downloadLink = result.downloadUrl; // Get the download URL

            if (!downloadLink) {
                return reply("Failed to retrieve download link 😔");
            }

            let songDetailsMessage = `╭━━━〔 ස්වර 𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑💖✨…… 〕━━━┈⊷
┃▸╭───────────
┃▸┃๏ Use headphones for best experience🎧🎶💆‍♂
┃▸└───────────···๏
╰────────────────┈⊷
╭━━❐━⪼
┇๏ Title -  ${songData.title}
┇๏ Url -  ${songData.url}
╰━━❑━⪼

🌟 ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ - https://whatsapp.com/channel/0029Vau8WudCXC3EopoI9C38

> *ස්වර 𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑💖✨……*`;
            // Send the video thumbnail with song details
            await messageHandler.sendMessage(from, {
                image: { url: songData.thumbnail },
                caption: songDetailsMessage,
            }, { quoted: quotedMessage });

            // Send the song as an audio file (not PTT by default)
            await messageHandler.sendMessage(from, {
                audio: { url: downloadLink },
                mimetype: "audio/mpeg",
                // ptt: true, // Uncomment this to send as PTT
            }, { quoted: quotedMessage });

        } catch (downloadError) {
            console.error("Error during download:", downloadError);
            reply("An Error Occurred While Downloading The Song 😔");
        }

    } catch (searchError) {
        console.error("Error during search:", searchError);
        reply("An Error Occurred While Searching For The Song 😔");
    }
});
