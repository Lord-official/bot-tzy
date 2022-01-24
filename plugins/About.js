let handler  = async (m, { itsu, usedPrefix: _p }) => {
      
let arr = []
for (let i = 0; i < 404; i++) arr.push({ productId: '4072560079514110' }) 
let list = await itsu.prepareMessageFromContent(m.chat, { listMessage: { title: 'ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ',  description: `- _*About me*_\n\n- Owner : LoRD\n- Age: 16/ 9th class\n - Github: Lord-official\n\n thx.` , listType: 2, productListInfo: { productSections: [{ title: 'github: Lord-official', products: arr }], headerImage: { productId: '4072560079514110', jpegThumbnail: thumb3 }, businessOwnerJid: '919778383987@s.whatsapp.net' }, footerText: `© ${itsu.getName('919778383987@s.whatsapp.net')}` }}, { quoted: m })
itsu.relayWAMessage(list, { waitForAck: true })
}

handler.help = ['about']

handler.tags = ['main']

handler.command = /^about$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler
