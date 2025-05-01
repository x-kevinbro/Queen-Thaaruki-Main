const { cmd } = require('../command');

cmd({
    pattern: "testvv",
    react: "✅",
    desc: "A test command.",
    category: "misc"
}, async (conn, mek, m) => {
    await m.reply("Test VV command works!");
});
