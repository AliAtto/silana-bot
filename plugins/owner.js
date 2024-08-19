import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\ALI_ATTO_0988109204
*instagram:*\ninstagram.com/https://www.instagram.com/ali_m_atto?igsh=bjNiNWRqYjY2d2t0


*script bot :* github.com/ALIATTO 

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
