import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number:*\Ali Atto*_`0988109204`
*instagram:*\ninstagram.com/https://www.instagram.com/ali_m_atto


*script bot :* github.com/AliAtto

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
