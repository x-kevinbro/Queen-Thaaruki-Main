const config = require('../config')
const { cmd, commands } = require('../command')
const axios = require('axios');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { Buffer } = require('buffer'); 
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const fileType = require("file-type")
const l = console.log



cmd({
  pattern: "mv",
  react: "🔎",
  alias: ["movie","film","cinema"],
  desc: "all movie search",
  category: "movie",
  use: '.movie',
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 if(!q) return await reply('*Enter movie name..🎬*')
const buttons = [
{buttonId: prefix + 'cine ' + q , buttonText: {displayText: '_CINESUBZ Results 🍿_'}, type: 1},
{buttonId: prefix + 'sinhalasub ' + q , buttonText: {displayText: '_SINHALASUB Results 🍿_'}, type: 1},
{buttonId: prefix + 'ytsmx ' + q , buttonText: {displayText: '_YTSMX Results 🍿_'}, type: 1},
{buttonId: prefix + 'baiscopes ' + q , buttonText: {displayText: '_BAISCOPES Results 🍿_'}, type: 1},
{buttonId: prefix + 'pupilvideo ' + q , buttonText: {displayText: '_PUPILVIDEO Results 🍿_'}, type: 1},	
  {buttonId: prefix + 'slanime ' + q , buttonText: {displayText: '_SLANIMECLUB Results 🍿_'}, type: 1},	
 {buttonId: prefix + '1377 ' + q , buttonText: {displayText: '_1377 Results 🍿_'}, type: 1},
  {buttonId: prefix + 'sexfull ' + q , buttonText: {displayText: '_18 PLUS Results 🍿_'}, type: 1},
  {buttonId: prefix + 'pirate ' + q , buttonText: {displayText: '_PIRATE Results 🍿_'}, type: 1}
]
const buttonMessage = {
  image: {url: 'https://github.com/THEMISADAS2007/MOVIE-VISPER-DATABASE/blob/main/Data/visper_main.jpeg?raw=true'},
  caption: `_*MOVIE VISPER SEARCH SYSTEM 🎬*_

*\`Input :\`* ${q} 

_*🌟 Select you like movie download site*_`,
  footer: config.FOOTER,
  buttons: buttons,
  headerType: 4
}
return await conn.buttonMessage2(from, buttonMessage, mek)
} catch (e) {
reply('*Error !!*')
l(e)
}
})

//-











