const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347035648535";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_57_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNixcbiAgICAgICAgMTk1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDg5LFxuICAgICAgICA2MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU0LFxuICAgICAgICA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM3LFxuICAgICAgICA3MyxcbiAgICAgICAgMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwLFxuICAgICAgICAzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI0LFxuICAgICAgICA0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICA5NixcbiAgICAgICAgNzQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDE3LFxuICAgICAgICA0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDExNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYwLFxuICAgICAgICA5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgODUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKd3kwVC9NZmdQK1hMV2xKaEdWR3ZXdEVXT1dQV2l6UmZMcC9ESFhZSnZBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1bEhpbkxOZVFVZUgtWEpyM00zYkFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgxODYyMGQyLTM0N2MtNGFjMS05YmMyLThlOTU3MzJmZThiOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDQsXG4gICAgICAxMDIsXG4gICAgICA5MixcbiAgICAgIDIyNyxcbiAgICAgIDY0LFxuICAgICAgMzQsXG4gICAgICAzMixcbiAgICAgIDIxOCxcbiAgICAgIDE5MixcbiAgICAgIDY0LFxuICAgICAgMTE3LFxuICAgICAgMjEzLFxuICAgICAgOCxcbiAgICAgIDMzLFxuICAgICAgMTY2LFxuICAgICAgOCxcbiAgICAgIDI1NSxcbiAgICAgIDEsXG4gICAgICA2NCxcbiAgICAgIDExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgMjU0LFxuICAgICAgMTgsXG4gICAgICAxOTQsXG4gICAgICAyMzAsXG4gICAgICAxMDUsXG4gICAgICAyNixcbiAgICAgIDExLFxuICAgICAgOTYsXG4gICAgICAxOSxcbiAgICAgIDM1LFxuICAgICAgMjI0LFxuICAgICAgMTYxLFxuICAgICAgNzksXG4gICAgICAxODAsXG4gICAgICAxMDUsXG4gICAgICAxMjQsXG4gICAgICAxNjEsXG4gICAgICA0NCxcbiAgICAgIDE2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKSlE0NjdLQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAzNTY0ODUzNTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDg5MDgwNDgxODE2NTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pDYzNOd0RFUDJGbHJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNytueUw2RGRBM2daL2FObkxkM1o4TmVSWVVGUnZ1LzFROHdpcmk3bTBEND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2MVBuSHI5cGRzRFF2ZG9Vc0dUODdzbTRJY1pJb2JtK05jcGhDWjNIeFlYQmJYczdjMkZMeWs3ckRWRWtWaFNnQnd5Vm9SdmhBeW1XNE5EMHJIZW9CUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxK3JIV1VXKzMrZUUwT2NiR3hmYlIxVlVaZzA4c3Uzb3pIVmVQWk1DU0k3SVAxUlRoODFYUjZiVm5kc3RVRk84Nk9GWWJCdGdBYnlRYjBYSDZrVTlpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDM1NjQ4NTM1OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwMjU4NTZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
