let handler = async (m, { itsu, command, args, text, usedPrefix, DevMode }) => {
  let { spawn } = require('child_process')
  let fs = require('fs')
const vn =[
'./src/Nya.mp3',
'./src/Nyaa.mp3',
]
hasil = vn[Math.floor(Math.random() * (vn.length))]
hisil = fs.readFileSync(hasil)
const anu = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": global.thumb
					},
					"title": "ʜᴇʜᴇ",
					"description": "LORD",
					"currencyCode": "INR",
					"priceAmount1000": "999999999999",
					"retailerId": ">//<",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
		}
}
  itsu.relayWAMessage(itsu.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "🅼︎🅴︎🅽︎🆄︎ 🆃︎🅴︎🆂︎🆃︎🅱︎🅾︎🆃︎",
                        "description": " \n_© 𝙻𝙾𝚁𝙳 2022_ ",
                        "buttonText": `Menu`,
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            { title: '『𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨』',
                                "rows": [
                                    {
                                        "title": `『ʙᴏᴛ-ɢʀᴏᴜᴘ』`, "description":  ``,
                                        "rowId": `${usedPrefix}from`
                                    }, {
                                       "title": `『ʀᴜɴᴛɪᴍᴇ』` , "description": ``,
                                       "rowId": `${usedPrefix}runtime`
                                    }, {
                                       "title": `『ᴏᴡɴᴇʀ』`,
"description": ``, 
                                       "rowId": `${usedPrefix}owner`
                                    }, {
                                       "title": `『sᴄ️』`,
"description": ``, 
                                        "rowId": `${usedPrefix}sc`
                                    }, {
                                        "title": `『ᴀʙᴏᴜᴛ️』`,
"description": ``, 
                                        "rowId": `${usedPrefix}about`                               
                                    }, { 
                                        "title": `『sᴛᴀᴛᴜs』`,
"description": ``, 
                                        "rowId": `${usedPrefix}stats`
                                    },{
"title": `『ᴍᴇɴᴜ』`,
"description": ``, 
                                       "rowId": `${usedPrefix}404`}
                                ]
                            }
                        ]
                    }
                 }, {quoted: anu}),{waitForAck: true}
)
return itsu.sendMessage(m.chat, hisil, 'audioMessage', {mimetype: 'audio/mp4', quoted: m, ptt: true, duration: 999999})
}

handler.help = ['menu','help','?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler


