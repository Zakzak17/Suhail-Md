const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="zak75258@gmail.com"
global.location="morocco.casablanca"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "UTC+01:00";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "POWERED BY NOXY" 


global.devs = "212617486161" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212617486161";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_54_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMSxcbiAgICAgICAgOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE2LFxuICAgICAgICA5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAzOCxcbiAgICAgICAgNixcbiAgICAgICAgNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDksXG4gICAgICAgIDQzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NixcbiAgICAgICAgMTAzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MixcbiAgICAgICAgMjExLFxuICAgICAgICAyOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYxLFxuICAgICAgICA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NixcbiAgICAgICAgODMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNixcbiAgICAgICAgMTk2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTczLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCVVdWR1BaUVJtY2V4dDRXVy9PUmdmRWk3ekdoRTZoMFprc0N4emQ5R3pVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIxMjYxNzQ4NjE2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUM0NDNDRDZEQjBFN0Q4NTUxQ0I5NDZEQjBBMjI5QzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2OTQwNDYzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklLa1ZhRGdNUnVlZjZILXZGc0FkVGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWQ3YWU5OTctMTUyMy00Yzk2LWFjMWQtNjUwZTZmY2U0ODk4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY3LFxuICAgICAgMTI1LFxuICAgICAgNjksXG4gICAgICAxODUsXG4gICAgICAxMyxcbiAgICAgIDI2LFxuICAgICAgMTEyLFxuICAgICAgMTUzLFxuICAgICAgMTYwLFxuICAgICAgMTI4LFxuICAgICAgMTU0LFxuICAgICAgNzcsXG4gICAgICAxMDksXG4gICAgICAxNDYsXG4gICAgICA4NixcbiAgICAgIDY5LFxuICAgICAgMTk2LFxuICAgICAgMTI2LFxuICAgICAgMTY4LFxuICAgICAgMTY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MSxcbiAgICAgIDE4NCxcbiAgICAgIDQ1LFxuICAgICAgMTA2LFxuICAgICAgMjU1LFxuICAgICAgMjA4LFxuICAgICAgMTMzLFxuICAgICAgMTI3LFxuICAgICAgMTEyLFxuICAgICAgMjUzLFxuICAgICAgMjAwLFxuICAgICAgNTMsXG4gICAgICAzMCxcbiAgICAgIDE5OCxcbiAgICAgIDE2MCxcbiAgICAgIDMwLFxuICAgICAgMjgsXG4gICAgICAxNzIsXG4gICAgICA1NSxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLSkFXRzM3RlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjEyNjE3NDg2MTYxOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTk9YWVwiLFxuICAgIFwibGlkXCI6IFwiMTM4MzQxMjMyMTkxMDI6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHFmN0x3SEVLVGQyYklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFWEpoUkdDREpnSEVodU0zNEVQRHJvQXM2ZmdKN3BONzNIdmh1enV2OUJFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlI5OWg3cjdUaWEzTHdxZjFxVHR0TEFZMEhjNnhGT21MRkFvcHJUTXM5dUJWTVMzbWdEZnAzQXRFNlExYlB2SnJCcU9PSDNBR3dHb0t4MTRDMnRZZEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhSVFRtUThYTktOU29NVWpaZyt5OTZ0YzQwWGhOUGFrK0dpd280RVZMQ1VQb25yS0p0elFXVmV3VFhtYkFVZVhWbzc3SnZFOEZ1NjFkK3oxSzJCV0NBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIxMjYxNzQ4NjE2MToyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY5NDA0NTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQYVNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBhUy5qc29uIjogIntcImtleURhdGFcIjpcIjR6Wktia0dNUDhjMUpUakUxekxpRmtrc2JLWi9abGVkdVJLdmcvMVVNNm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAwNjY1MDg3NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2OTQwNDYxMTM5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "NOXY",
  packname: process.env.PACK_NAME || "N",
  botname : process.env.BOT_NAME  || "NOXY",
  ownername:process.env.OWNER_NAME|| "It's NoXy",


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
