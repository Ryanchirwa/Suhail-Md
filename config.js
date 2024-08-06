const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email =ryanchirwa28@gmail.com 
global.location st Mary's 


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER 0786313048 process.env.OWNER_NUMBER.replace(/[\s+]/g, '') :0786313048



//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || True
global.save_status = process.env.AUTO_SAVE_STATUS ||True
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESUHAIL_11_42_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxLFxuICAgICAgICAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ1LFxuICAgICAgICA3MixcbiAgICAgICAgMjQzLFxuICAgICAgICA4NixcbiAgICAgICAgMTE5LFxuICAgICAgICA5NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDc4LFxuICAgICAgICA2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc5LFxuICAgICAgICA2LFxuICAgICAgICA5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDc4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM3LFxuICAgICAgICA1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDYyLFxuICAgICAgICA0MixcbiAgICAgICAgODQsXG4gICAgICAgIDE4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMwLFxuICAgICAgICA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMyLFxuICAgICAgICA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9GdDE5aHJjSVNoRlhFYkVNNlRORktsTHdNSnVYS3I1b2Rrd1dHMllDL0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNJa3FYRWtRVEt1aHNvQmhlRmVJQ3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjQ5NjY5ODQtZTg1Mi00YzIxLWIxYTQtZjQzZGNlY2EwYzRmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MyxcbiAgICAgIDEzMCxcbiAgICAgIDc3LFxuICAgICAgMjE5LFxuICAgICAgNjEsXG4gICAgICAxMDMsXG4gICAgICA5OCxcbiAgICAgIDE0MCxcbiAgICAgIDEwOSxcbiAgICAgIDY4LFxuICAgICAgMTA3LFxuICAgICAgMTI1LFxuICAgICAgNDIsXG4gICAgICA1NyxcbiAgICAgIDI1MixcbiAgICAgIDE5NyxcbiAgICAgIDEwMyxcbiAgICAgIDg2LFxuICAgICAgODEsXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTEsXG4gICAgICAxNDAsXG4gICAgICAxNDksXG4gICAgICAyMjMsXG4gICAgICAxMjQsXG4gICAgICAyNTEsXG4gICAgICAxNTIsXG4gICAgICAyNDAsXG4gICAgICAxNzYsXG4gICAgICAxNDIsXG4gICAgICAyNDYsXG4gICAgICAyMTYsXG4gICAgICAyMDgsXG4gICAgICAxMCxcbiAgICAgIDIxMixcbiAgICAgIDE2MSxcbiAgICAgIDc3LFxuICAgICAgNjcsXG4gICAgICAxMTQsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWko5UEIzUktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4NjMxMzA0ODo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiWU9VTkcgQk9ZIE5FVkVSIEJST0tFIEFHQUlOXCIsXG4gICAgXCJsaWRcIjogXCIyNDMwNzQxNDM5MjAyNTU6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMS2c5TVlIRUtEMXdyVUdHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkxzNEQ3Yk9WMlRaRVlZak1USWFKK0JZUFJ6bEdPUUdrVUg5dUxDdk42RlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidDFmUHA3Tkg0SFNuc3NET2xqRitHa0R5WUJHYUYxaEw5enNtNzh4SEExcjdJbnhRdEwxTFVCaVo1WmJFVEJkbEJPZEVhUmF4TDJIeHB1ZS9ac3phQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS2VKbHVEbm81L2pvc3ZFcjRMZTVvRjZpbGN0QnU5cXJRRzFjS3QyNmRNWW9NSzlsTE9DbENFYXQyZUF4ZVdrVEZpaXQyd25raFgvZDE1MjFPd3djaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzg2MzEzMDQ4OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjg1ODE0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5FelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkV6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUG1zdlozK01kZEcyQmplL28wcTNMNXhBdWt1TWVjQUJQaVp2RGczWGxYQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDI3NzUzNTIyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=SSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || ""YoungBoy 
  botname : process.env.BOT_NAME  ||Ryan
  ownername:process.env.OWNER_NAME||NBA YoungBoy 

  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| 
  //warncount: process.env.WARN_COUNT || 2,
  //userImages:process.env.USER_IMAGES|| text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
