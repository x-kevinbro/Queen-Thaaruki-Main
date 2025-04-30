const { cmd, commands } = require('../command');
const fg = require('api-dylux');
const yts = require('yt-search');

// Helper function to fetch and send media
async function fetchAndSendMedia(conn, mek, q, type, reply) {
    if (!q) return reply("*Please provide a link or a name 🔎...*");
    const search = await yts(q);
    const data = search.videos[0];
    const url = data.url;

    let desc = `╭━━━〔 *𝐐𝐔𝚵𝚵𝐍 𝐑𝚫𝐒𝐇𝐔 𝐌𝐃* 〕━━━┈⊷
┃▸╭───────────
┃▸┃๏ *${type === 'audio' ? 'MUSIC' : 'VIDEO'} DOWNLOADER*
┃▸└───────────···๏
╰────────────────┈⊷
╭━❮ *Download ${type === 'audio' ? 'Audio' : 'Video'}* ❯━┈⊷
┃▸╭─────────────·๏
┃▸┃๏ *Title* - ${data.title}
┃▸┃๏ *Views* - ${data.views}
┃▸┃๏ *Description* - ${data.description}
┃▸┃๏ *Duration:* ${data.timestamp}
┃▸┃๏ *Link* - ${data.url}
┃▸┃๏ *Ago* - ${data.ago}
┃▸└────────────┈⊷
╰━━━━━━━━━━━━━━━⪼
> *© 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`;

    await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

    const down = type === 'audio' ? await fg.yta(url) : await fg.ytv(url);
    const downloadUrl = down.dl_url;

    await conn.sendMessage(from, {
        [type]: { url: downloadUrl },
        mimetype: type === 'audio' ? "audio/mpeg" : "video/mp4",
    }, { quoted: mek });

    await conn.sendMessage(from, {
        document: { url: downloadUrl },
        mimetype: type === 'audio' ? "audio/mpeg" : "video/mp4",
        fileName: `${data.title}.${type === 'audio' ? 'mp3' : 'mp4'}`,
        caption: "©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX"
    }, { quoted: mek });
}

// Command for downloading audio
cmd({
    pattern: "play3",
    alias: ["ytmp3", "audio3"],
    desc: "Download songs",
    category: "download",
    react: "🎵",
    filename: __filename
}, async (conn, mek, m, { q, reply }) => {
    try {
        await fetchAndSendMedia(conn, mek, q, 'audio', reply);
    } catch (e) {
        reply(`❌ Error: ${e}`);
    }
});

// Command for downloading video
cmd({
    pattern: "darama",
    alias: ["video3", "ytmp4"],
    desc: "Download video",
    category: "download",
    react: "🎥",
    filename: __filename
}, async (conn, mek, m, { q, reply }) => {
    try {
        await fetchAndSendMedia(conn, mek, q, 'video', reply);
    } catch (e) {
        reply(`❌ Error: ${e}`);
    }
});
