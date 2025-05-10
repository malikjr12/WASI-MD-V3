// config.js
/**
credits sid for plugins 
**/

const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0N2NHFqbERqSU9ienBmaG13SEJtc1U0Zm85dldEbkp3ejNpcktuMkJuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWRRK3NybW8waERWdS9TRkVuMENNWVJ3dDNjZ1d5M0dEYnQrK0JBdHlsUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSExodVcwMlhzOXBOSytLaEh5b1dndVowOVJVcG9yajZtU1ZFYll0bkhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Y09LUVpwVGdDRUdmRS9TK3VTNy9xTWkwV0cybk9DYkcrcUNIa2ZIcTFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1CY2pnWnQzRlZMOW5RbVFKem5WZGRJU0xOY3hNVHBhZE5QWUNuRlM5MlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUxcWpXajIvd1FIRjFyUVRQLzNyUGQ5cHkvV3RrOUNqVitqWTI5MG1ieUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUN2SmRIYnZKTll4K0Nmd0FrdVNWcWhFT0NvTEFHM3VCT1p1WmYxR0Jsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3NJTEllZzZjQTdHcVlMcjlGbnFyN3ZYSGYzcmV3VVdMcGNzc1U1ZGFVdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InoxbVFYY1BlaFkzeXBFdFgxUTE3TUd0clczb09rRStSYkpRR0RPVHpDRjQ1UldWOFd3cHNTdXNXVkR1MitrQXdRTWNEeGVHTmkzVUpTKzNiOXlDWER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6IkNOZDloZ1ZKTWY3aHpmSDd3MURsTmxJMHYvMXJnbGE5NHNmODA0aUlhMms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZIVnBjYnBIU2d5dThwUlRkN01YcHciLCJwaG9uZUlkIjoiNTMwOWRiMTgtNjcyNy00ODc4LWIwOWUtOTgzMGE4ZTc5MmVmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFVQmdDajVNd09yZG1qV1lhTldLa0plMFdKcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWNVBwRDNrVE9reUh1akdrUnRxVzArM2F1T1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWkpIRlpIMVMiLCJtZSI6eyJpZCI6IjkyMzEyMDQ3OTQ1MzozQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMTGt4N0FCRU9hWTljQUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJobFU0NUkxWlA1NS85Ri9rU1kwZHlvbVk2cGlUbVZwVUtGdkY5S2dTWG1RPSIsImFjY291bnRTaWduYXR1cmUiOiJjcWlvZGtmekRsTEdpcm9lNWhIZjNRYjZ3V2hHZTNKNHRJQzNCUWJURDdMTGQ5b0hCWFNRMHZseTdnQ2VlS3drQUNOOVppR3FNci9HRzVGYlFia0VDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWUNBbXBwRjMydUdIMldaSHBnNktzWm1XWDJVWVhRVzUrYytqZHFPSDlQbk82ampackJ2ck9vV0ZkTHg1ZGpOVWp1VG5WYWJ6WGh0dkNMRmVJaUVvQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMjA0Nzk0NTM6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZWlZPT1NOV1QrZWYvUmY1RW1OSGNxSm1PcVlrNWxhVkNoYnhmU29FbDVrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ2NzUwNTc5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlsTiJ9",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "MR WASI DEV",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923192173398",
  GEMINI_KEY: process.env.GEMINI_KEY || "",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
  YTDL_NO_UPDATE: process.env.YTDL_NO_UPDATE !== undefined ? process.env.YTDL_NO_UPDATE === 'true' : true,
};


module.exports = config;
