const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "🪐",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╭━━━━━━〔 *𝚭𝚯𝚪𝚯 𝚭𝚳𝐃* 〕━━━━━━┈⊷
    •••Ｈｅｌｌｏ ${pushname}👊,•••
       🎐 *Ｉ ａｍ Ａｌｉｖｅ Ｎｏｗ！* 🎐
┃◈╭─────────────·๏
┃◈┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃◈┃• *📟 Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *⚙️ HostName*: ${os.hostname()}
┃◈┃• *👨‍💻 Owner*: X-KEVIN BRO
┃◈┃• *🧬 Version*: 1.0 (BETA)
╰────────────────────────┈⊷
> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝙭-𝙠𝙚𝙫𝙞𝙣 ✾*`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/Kp36tPhC/1377.png` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363285813931317@newsletter',
                    newsletterName: 'ZORO ZMD-UPDATES',
                    serverMessageId: 143 
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
