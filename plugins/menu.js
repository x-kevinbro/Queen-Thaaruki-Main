/*
 DONT COPY
*/

const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*
    
     *꧁ྀི*𝐐𝐔𝚵𝚵𝐍 𝐑𝚫𝐒𝐇𝐔 𝐌𝐃*ྀི꧂*
*❖╭─────────────···▸*
> *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
> *ᴍᴏᴅᴇ* : *ᴘʀɪᴠᴇᴛ*
> *ᴘʀᴇғɪx* : *.*
> *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *ɴᴀᴍᴇ ʙᴏᴛ* : *𝐐𝐔𝚵𝚵𝐍 𝐑𝚫𝐒𝐇𝐔 𝐌𝐃*
> *ᴄʀᴇᴀᴛᴏʀ* : *CYBER RUSH MODZ ( Nipun Harshana )*
> *ᴠᴇʀsɪᴏɴs* : *ᴠ.0.1*
*❖╰────────────···▸▸*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*
*╭╼╼╼╼╼╼╼╼╼╼*
*├➤ 1 • ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
*├➤ 2 • ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ*
*├➤ 3 • ᴀɪ ᴍᴇɴᴜ*
*├➤ 4 • ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ*
*├➤ 5 • ᴅᴀᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ*
*├➤ 6 • ᴍᴀɪɴ ᴍᴇɴᴜ*
*├➤ 7 • ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
*├➤ 8 • ꜰᴜɴ ᴍᴇɴᴜ*
*├➤ 9 • ᴛᴏᴏʟꜱ ᴍᴇɴᴜ*
*├➤ 10 • ᴏᴛʜᴇʀ ᴍᴇɴᴜ*
*╰╼╼╼╼╼╼╼╼╼╼*
* ▣▣▣▣▣▣▣▣▣▣▣▣*⁠⁠⁠⁠

*ׂ╰┈➤ 🔢Reply with the Number you want to select

> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://i.ibb.co/BsjkCDP/9555.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*꧁◈╾───☉ ᴏᴡɴᴇʀ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *setting*
> ʙᴏᴛ ꜱᴇᴛᴛɪɴɢ  ᴄʜᴀɴɢᴇ
│ ➽ *block*
> ᴜꜱᴇʀ ʙʟᴏᴄᴋ
│ ➽ *unblock*
> ʙʟᴏᴄᴋ ᴜꜱᴇʀ  ᴜɴʙʟᴏᴄᴋ
│ ➽ *shutdown*
> ʙᴏᴛ ꜱᴛᴏᴘ
│ ➽ *broadcast*
> ᴀʟʟ ɢʀᴏᴜᴘ ꜱᴇɴᴅ ᴍꜱɢ
│ ➽ *setpp*
> ᴘʀᴏꜰɪʟᴇ ᴘɪᴄ ᴄʜᴀɴɢᴇ
│ ➽ *clearchats*
> ᴀʟʟ ᴄʜᴀᴛ ᴄʟᴇᴀʀ 
│ ➽ *jid*
> ᴄʜᴀᴛ ᴊɪᴅ 
│ ➽ *gjid*
> ɢʀᴏᴜᴘ ᴊɪᴅ
│ ➽ *update*
> ʙᴏᴛ ᴜᴘᴅᴀᴛᴇ
│ ➽ *updatecmd*
> ᴜᴘᴅᴀᴛᴇ ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ
│ ➽ *xvdl*
> 18+ ᴠɪᴅᴇᴏ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *movie*
> ᴍᴏᴠɪᴇ ᴅᴀᴡɴʟᴏᴀᴅ 
╰────────────────────●●►


> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`);
                        break;
                    case '2':               
                        repl (`*꧁◈╾───☉ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *sticker*
> ᴘʜᴏᴛᴏ ᴄᴏɴᴠᴇʀᴛ ꜱᴛɪᴄᴋᴇʀ
│ ➽ *trt*
> ᴛʀᴀɴꜱʟᴀᴛᴇ ᴛᴇxᴛ ʙᴇᴛᴡᴇᴇɴ  ʟᴀɴɢᴜᴀɢᴇꜱ
│ ➽ *tts*
> ᴅᴀᴡɴʟᴏᴀᴅ ᴛʏᴘᴇ ᴛᴇxᴛ ᴛᴏ ᴠᴏɪᴄᴇ
│ ➽ *vv*
> ᴠɪᴇᴡᴏɴᴄᴇ ᴍᴇꜱꜱᴀɢᴇ ᴀɢɪɴ ᴠɪᴇᴡ
│ ➽ *fancy*
> ᴄᴏɴᴠᴇʀᴛ ᴛᴏ ᴛᴇxᴛ ɪɴᴛᴏ ᴠᴀʀɪᴏᴜꜱ ꜰᴏɴᴛ
│ ➽ *pickupline*
> ɢᴇᴛ ᴀ ʀᴀɴᴅᴏᴍ ᴘɪᴄᴜᴘ ʟɪɴᴇ ᴛʜᴇ ᴀᴘɪ
╰────────────────────●●►


> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`);
                        break;
                    case '3':               
                        reply(`*꧁◈╾───☉ ᴀɪ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *ai*
> ᴄʜᴀᴛ ᴀɪ
╰────────────────────●●►


> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`);
                        break;
                    case '4':               
                        reply(`*꧁◈╾───☉ ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *movie*
> ᴍᴏᴠɪᴇ ꜱᴇᴀʀᴄʜ
│ ➽ *yts*
> ꜱᴇᴀʀᴄʜ ꜰᴏʀ ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏꜱ ᴜꜱɪɴɢ ᴀ Qᴜᴇʀʏ
│ ➽ *save*
> ꜱᴀᴠᴇ ᴀɴᴅ ꜱᴇɴᴅ ʙᴀᴄᴋ ᴀ ᴍᴇᴅɪᴀ ꜰɪʟᴇ ( ɪᴍᴀɢᴇꜱ / ᴠɪᴅᴇᴏ ᴏʀ ᴀᴜᴅɪᴏ )
│ ➽ *news*
> ɢᴇᴛ ᴀ ʟᴀꜱᴛᴇꜱᴛ ɴᴇᴡꜱ ʜᴇᴅʟɪɴᴇꜱ
╰────────────────────●●►


> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`);
                        break;
                    case '5':               
                        reply(`*꧁◈╾───☉ ᴅᴀᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *song*
> ʏᴏᴜᴛᴜʙᴇ ꜱᴏɴɢ  ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *play3*
> ʏᴏᴜᴛᴜʙᴇ ꜱᴏɴɢ ᴅᴀᴡɴʟᴏᴀᴅ  
│ ➽ *play2*
> ʏᴏᴜᴛᴜʙᴇ ꜱᴏɴɢ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *mp3*
> ʏᴏᴜᴛᴜʙᴇ ꜱᴏɴɢ ᴅᴀᴡɴʟᴏᴀᴅ 
│ ➽ *mp4*
> ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *darama*
> ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *video*
> ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *apk*
> ᴘʟᴀʏꜱᴛᴏʀʏ ᴀᴘᴘ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *tiktok*
> ᴛɪᴋᴛᴏᴋ ᴠɪᴅᴇᴏ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *tt*
> ᴛɪᴋᴛᴏᴋ ᴠɪᴅᴇᴏ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *fb*
> ꜰᴀᴄᴇʙᴏᴏᴄᴋ ᴠɪᴅᴇᴏ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *mf*
> ᴍᴇᴅɪᴀꜰɪʀᴇ ʟɪɴᴋ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *ig*
> ɪɴꜱᴛᴀɢʀᴀᴍ ᴠɪᴅᴇᴏ ᴅᴀᴡɴʟᴏᴀᴅ
╰────────────────────●●►


> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`);
                        break;
                    case '6':               
                        reply(`*꧁◈╾───☉ ᴍᴀɪɴ  ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *wiki*
> ꜱᴇᴀʀᴄʜ ᴡɪᴋɪᴘᴇᴅɪᴀ ꜰᴏʀ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ
│ ➽ *env*
> ɢᴇᴛ ʙᴏᴛ ꜱᴇᴛᴛɪɴɢ ʟɪꜱᴛ
│ ➽ *system*
> ᴄʜᴇᴄᴋ ᴜᴘᴛɪᴍᴇ
│ ➽ *ping2 / ping*
> ᴄʜᴇᴄᴋ ʙᴏᴛ ꜱᴘᴇᴇᴅ
│ ➽ *owner*
> ɢᴇᴛ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ
│ ➽ *alive*
> ʙᴏᴛ ᴏɴʟɪɴᴇ ᴄʜᴇᴄᴋ
│ ➽ *list*
> ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅ ᴛᴡᴏ ʟɪꜱᴛ
╰────────────────────●●►


> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`);
                        break;
                    case '7':               
                        reply(`*꧁◈╾───☉ ɢʀᴏᴜᴘ  ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *closetime*
> ᴍᴜᴛᴇ ᴛʜɪꜱ ɢʀᴏᴜᴘ
│ ➽ *opentime*
> ᴜɴᴍᴜᴛᴇ ᴛʜɪꜱ ɢʀᴏᴜᴘ
│ ➽ *kick*
> ʀᴇᴍᴏᴠᴇ ᴏɴᴇ ᴍᴇᴍʙᴇʀꜱ
│ ➽ *kickall*
> ʀᴇᴍᴏᴠᴇ ᴀʟʟ ᴍᴇᴍʙᴇʀꜱ 
│ ➽ *promote*
> ꜱᴇᴛ ᴀᴅᴍɪɴɢ
│ ➽ *demote*
> ᴜɴꜱᴇᴛ ᴀᴅᴍɪɴɢ
│ ➽ *add*
> ᴀᴅᴅ ᴏɴᴇ  ᴍᴇᴍʙᴇʀꜱ
│ ➽ *delete*
> ᴅᴇʟᴇᴛᴇ ᴛʜɪꜱ ᴍᴇꜱꜱᴀɢᴇ
│ ➽ *setname*
> ɢʀᴏᴜᴘ ɴᴀᴍᴇ ᴄʜᴀɴɢᴇ
│ ➽ *tagall*
> ᴛᴀɢ ᴀʟʟ ᴍᴇᴍʙᴀʀꜱ
│ ➽ *tagadmin*
> ᴛᴀɢ ᴀʟʟ  ᴀᴅᴍɪɴɢ
│ ➽ *invite*
> ɢʀᴏᴜᴘ ʟɪɴᴋ ɢᴇɴᴇʀᴀᴛᴛᴇ
│ ➽ *join*
> ᴊᴏɪɴ ᴀ ɢʀᴏᴜᴘ ᴜꜱɪɴɢ ᴏɴ ɪɴᴠɪᴛᴇ ʟɪɴᴋ
│ ➽ *leave*
> ᴍᴀᴋᴇ ᴛʜᴇ ʙᴏᴛ ʟᴇꜰᴛ ᴛʜᴇ ᴄᴜʀʀᴇɴᴛ ɢʀᴏᴜᴘ
│ ➽ *setdesc*
> ᴄʜᴀɴɢᴇ ɢʀᴏᴜᴘ ᴅᴇꜱᴄᴛʀɪᴘᴛɪᴏɴ
│ ➽ *setwelcome*
> ꜱᴇᴛ ᴛʜᴇ ᴡᴇʟᴄᴏᴍᴇ ᴍᴇꜱꜱᴀɢᴇ ꜰᴏʀ ᴛʜᴇ ɢʀᴏᴜᴘ
│ ➽ *setgoodbye*
> ꜱᴇᴛ ᴛʜᴇ ɢᴏᴏᴅ ʙʏᴇ  ᴍᴇꜱꜱᴀɢᴇ ꜰᴏʀ ᴛʜᴇ ɢʀᴏᴜᴘ
╰────────────────────●●►


> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`);
                       break;
                    case '8':               
                        reply(`*꧁◈╾───☉ ꜰᴜɴ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *ship*
│ ➽ *dare*
│ ➽ *character*
│ ➽ *fact*
│ ➽ *insult*
│ ➽ *truth*
│ ➽ *pickupline*
│ ➽ *joke*
│ ➽ *dog*
│ ➽ *hack*
│ ➽ *animegirl*
│ ➽ *animegirl1*
│ ➽ *animegirl2*
│ ➽ *animegirl3*
│ ➽ *animegirl4*
│ ➽ *animegirl5*
╰────────────────────●●►


> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`);

                        break;
                    case '10':               
                        reply(`*꧁◈╾───☉ ᴏᴛʜᴇʀ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *anime*
│ ➽ *anime1*
│ ➽ *anime2*
│ ➽ *anime3*
│ ➽ *anime4*
│ ➽ *anime5*
│ ➽ *githubstalk*
│ ➽ *weather*
│ ➽ *fancy*
╰────────────────────●●►


> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
