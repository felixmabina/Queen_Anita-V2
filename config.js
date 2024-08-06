//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254759725734";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUtWeUkwOGY4SFNWUG9kMEtIUU1lUWNqU01mcGI1UjI2Z1JYUjJiRVczaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZE9uY250K052MUJyajc2TmI4Q3BQYzZsb0kxOCtXa2xReXBMdnBnUXlrOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTWNhUjgwWVhXeVBTOXh0elVqTWprZElvSDNxZXVuN3JzeXpqeEJyOG53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5dXNFRmVLYWlMKy9YZW8rWlB6cW1DLzNhUzJ3T2ZRR2d1bjJjYmJVd200PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNBZTBKV3pZQ2s4dVJuVFp6K0xCVVRxVzlxS2hSNGg0b0w2cFg1cjNCV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVlNzJiakJGOEJPS0tCOVdYVGg3NzdBNFlrc3U4QzZqMnY0OXBLWXFFbkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUpTMGFpaWJLWmZ6WTZTdzdUNUZkMDVpYm1lQy9JTS9MeHdpUEM1SmZuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3VTS0dlSEwxbHdCblY1VHlxUnZyNXZFYWhIdGg1cC9NQTFJNmh1eUowOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZ6Y2lJbkYzL1l5c2lFSTlmZG05dmthN2FwUjZwcFZwcXlDYVBtdmQ0RjNaQ3BQSGJmUWowVDlMcm5RcVkxaTJ3Q25aR095alBEenRnQ0E2Q1F4VUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiJzdytkQWtPMzlwdHNpcUtYMklxNWtoZWpDNjViTnlSOEYxdXM3TjRyekE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJsSUw4NUJ2RVRiU3hTeG05X083VmFRIiwicGhvbmVJZCI6IjYzZmIzMWFkLTZhZjctNGJkOC1iNWQyLWNiY2M5ZmRmM2U2NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQenBjaVQ0a2d3cTBuN0hJUmZ2L09Nek82SE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0xwM0tHejR3SGs2eTJ4R0Z5d0J1T0xJdTFjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFOMllMQlFXIiwibWUiOnsiaWQiOiIyNTQ3NTk3MjU3MzQ6NzBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRmVsaXgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1A2SThyTUdFUERweWJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFFbDFRWTRTalBpNFR6Mk5HUng2VHFld0VQV3l5S1UxV0RKZGdTRCtxUVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjdaRFJ3VDU5UTZZNWh0NElGdk4wRXAyRE1pOE80WGgvTnFUL253M0dSSFhoeFNELzIxaDhwMFJ5UVY1eXd2MkJ3enhuSWt4SEYyNWRYdHVuekdISkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRa3d4bTZPYlh2VmdWNmt0MjgvV0hQLzh6VjNKWTNTS2R3YVdzR1BKK241WHZwQnVsMWdXd0tCOHNDRE1ac1EyYy9pYVkrYnM1ZHhDZEMyVzlXYWJDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc1OTcyNTczNDo3MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXaEpkVUdPRW96NHVFODlqUmtjZWs2bnNCRDFzc2lsTlZneVhZRWcvcWtHIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyOTcxMzkxfQ==
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUtWeUkwOGY4SFNWUG9kMEtIUU1lUWNqU01mcGI1UjI2Z1JYUjJiRVczaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZE9uY250K052MUJyajc2TmI4Q3BQYzZsb0kxOCtXa2xReXBMdnBnUXlrOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTWNhUjgwWVhXeVBTOXh0elVqTWprZElvSDNxZXVuN3JzeXpqeEJyOG53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5dXNFRmVLYWlMKy9YZW8rWlB6cW1DLzNhUzJ3T2ZRR2d1bjJjYmJVd200PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNBZTBKV3pZQ2s4dVJuVFp6K0xCVVRxVzlxS2hSNGg0b0w2cFg1cjNCV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVlNzJiakJGOEJPS0tCOVdYVGg3NzdBNFlrc3U4QzZqMnY0OXBLWXFFbkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUpTMGFpaWJLWmZ6WTZTdzdUNUZkMDVpYm1lQy9JTS9MeHdpUEM1SmZuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3VTS0dlSEwxbHdCblY1VHlxUnZyNXZFYWhIdGg1cC9NQTFJNmh1eUowOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZ6Y2lJbkYzL1l5c2lFSTlmZG05dmthN2FwUjZwcFZwcXlDYVBtdmQ0RjNaQ3BQSGJmUWowVDlMcm5RcVkxaTJ3Q25aR095alBEenRnQ0E2Q1F4VUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiJzdytkQWtPMzlwdHNpcUtYMklxNWtoZWpDNjViTnlSOEYxdXM3TjRyekE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJsSUw4NUJ2RVRiU3hTeG05X083VmFRIiwicGhvbmVJZCI6IjYzZmIzMWFkLTZhZjctNGJkOC1iNWQyLWNiY2M5ZmRmM2U2NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQenBjaVQ0a2d3cTBuN0hJUmZ2L09Nek82SE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0xwM0tHejR3SGs2eTJ4R0Z5d0J1T0xJdTFjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFOMllMQlFXIiwibWUiOnsiaWQiOiIyNTQ3NTk3MjU3MzQ6NzBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRmVsaXgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1A2SThyTUdFUERweWJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFFbDFRWTRTalBpNFR6Mk5HUng2VHFld0VQV3l5S1UxV0RKZGdTRCtxUVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjdaRFJ3VDU5UTZZNWh0NElGdk4wRXAyRE1pOE80WGgvTnFUL253M0dSSFhoeFNELzIxaDhwMFJ5UVY1eXd2MkJ3enhuSWt4SEYyNWRYdHVuekdISkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRa3d4bTZPYlh2VmdWNmt0MjgvV0hQLzh6VjNKWTNTS2R3YVdzR1BKK241WHZwQnVsMWdXd0tCOHNDRE1ac1EyYy9pYVkrYnM1ZHhDZEMyVzlXYWJDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc1OTcyNTczNDo3MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXaEpkVUdPRW96NHVFODlqUmtjZWs2bnNCRDFzc2lsTlZneVhZRWcvcWtHIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyOTcxMzkxfQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
