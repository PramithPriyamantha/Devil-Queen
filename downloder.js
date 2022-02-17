/* 
Sew Queen Whatsapp Bot      

WhatsApp: https://wa.me+94771348017
WhatsApp: https://wa.me+94771348017
Licensed under the  GPL-3.0 License;

Coded By Pramith Priyamantha
*/

let DataPack = require('devil-queen-pro');
let DevilQueen = require('devil-queen-pro/sources/dc/handler');
let Details = require('devil-queen-pro/sources/dc/Details');
let Language = DataPack.constdata
let WorkType = Details.WORKTYPE == 'public' ? false : true
let { MessageType, Mimetype} = require('@pramith01priyamantha/devil-queen-web');
let { sendMessageDownloader, sendMessageBrodcast, sendMessageAddBrodcast, downloadapkDevilQueen, downloadtwitterDevilQueen} = require('devil-queen-pro/sources/dc/cmd/dl')
let { ytdocdlBackupForDevilQueen } = require('devil-queen-pro/sources/dc/cmd/yt')
const Lang = Language.dataGet('scrapers')
var ytsd = require( 'yt-search' )
const translatte = require('translatte')


DevilQueen['IntroduceCMD']({
        pattern: 'mediafire ?(.*)', // Mediafire Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        try {
await sendMessageDownloader(QueenDevil, input, 'mediafire')
          } catch (e) {
                  return await QueenDevil.client.sendMessage(QueenDevil.jid,'Sorry I Could Not Find This Mediafire File!',MessageType.text, { quoted: QueenDevil.data})
                  }
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'insta ?(.*)',  // instagram Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        try {
await sendMessageDownloader(QueenDevil, input, 'insta')
                } catch (e) {
                  return await QueenDevil.client.sendMessage(QueenDevil.jid,'Sorry I Could Not Find This Insta Video!',MessageType.text, { quoted: QueenDevil.data})
              }
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'github ?(.*)',   // About Github Ptofile And Repo
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        try {
await sendMessageDownloader(QueenDevil, input, 'github')
                } catch (e) {
                  return await QueenDevil.client.sendMessage(QueenDevil.jid,'Sorry I Could Not Find This Profile!',MessageType.text, { quoted: QueenDevil.data})
                  }
})); 


DevilQueen['IntroduceCMD']({
        pattern: 'tiktok ?(.*)',   // Tiktok Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
await sendMessageDownloader(QueenDevil, input, 'tiktok')
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'url ?(.*)',     // Image To Url
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        if (QueenDevil.reply_message === false || QueenDevil.reply_message.image === false) return await QueenDevil.client.sendMessage(QueenDevil.jid,'Reply To Any Image...',MessageType.text);
        try {
await sendMessageDownloader(QueenDevil, input, 'imgurl')
        } catch (e) {
  if(e.message.includes('display')) {
     return await QueenDevil.client.sendMessage(QueenDevil.jid,'Your Imgbb APIKEY is invalid.. please add the api key ( api.imgbb.com )',MessageType.text)
     } else {
   return await QueenDevil.client.sendMessage(QueenDevil.jid,'Do Not Use Bot Here.. This Is Your Log Number',MessageType.text)
   }
  }
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'covid ?(.*)',   // Covid Info
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
await sendMessageDownloader(QueenDevil, input, 'covid')
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'trt ?(.*)',    // Language Translate
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        if (!QueenDevil.reply_message) {
            return await QueenDevil.client.sendMessage(QueenDevil.jid,Lang.NEED_REPLY,MessageType.text);
        }
        var langa;
        var langb;
        if(input[1].includes(' ')) {
   langa = input[1].split(' ')[0];
   langb = input[1].split(' ')[1];
   } else {
  langa = 'auto';
  langb = Details.LANG
 }
   
   
       let ceviri = await translatte(QueenDevil.reply_message.message, {from: langa, to: langb});
        if ('text' in ceviri) {
            return await QueenDevil.reply('*▶️ ' + Lang.LANG + ':* ```' + langa + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + langb + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await QueenDevil.client.sendMessage(QueenDevil.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'tts ?(.*)',   // Text To Audio
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
await sendMessageDownloader(QueenDevil, input, 'tts')
})); 


DevilQueen['IntroduceCMD']({
        pattern: 'wiki ?(.*)',  // Wikipedia Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
await sendMessageDownloader(QueenDevil, input, 'wiki')
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'img ?(.*)',  // Google Image Download With 10+ images
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
await sendMessageDownloader(QueenDevil, input, 'imgsend')
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'wallpaper ?(.*)',   // Hd Wallpaper Download With Search Option 100000000+
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
await sendMessageDownloader(QueenDevil, input, 'wallpaper')

})); 
DevilQueen['IntroduceCMD']({
        pattern: 'pint ?(.*)',    // Pinterest Download With Search Option 100000000+
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
await sendMessageDownloader(QueenDevil, input, 'pint')
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'yts ?(.*)',     // Youtube Search Engine
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
await sendMessageDownloader(QueenDevil, input, 'yts')
})); 
DevilQueen['IntroduceCMD']({
        pattern: 'lyric ?(.*)',     // Songs Lirics Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        try {
await sendMessageDownloader(QueenDevil, input, 'liric')
                } catch (e) {
                  return await QueenDevil.client.sendMessage(QueenDevil.jid,'Sorry I Could Not Find This Song!',MessageType.text, { quoted: QueenDevil.data})
                  }
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'twitter ?(.*)', // Twitter Video Download (HD / SD / AUDIO)
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
await sendMessageDownloader(QueenDevil, input, 'twitter')
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'gettv ?(.*)', // Twitter Video Download (HD / SD / AUDIO)
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        try {
await downloadtwitterDevilQueen(QueenDevil, input)
               } catch (e) {
                  return await QueenDevil.client.sendMessage(QueenDevil.jid,'Sorry I Could Not Find It!',MessageType.text, { quoted: QueenDevil.data})
                  }
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'ytv ?(.*)',      // Youtube Video Download  (144p / 240p / 360p / 420p / 720p / mp3)
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        try {
await sendMessageDownloader(QueenDevil, input, 'ytv')
              } catch (e) {
                  return await QueenDevil.client.sendMessage(QueenDevil.jid,'Sorry I Could Not Find This Video!',MessageType.text, { quoted: QueenDevil.data})
                  }
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'gitclone ?(.*)',    // Github Repo Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        try {
await sendMessageDownloader(QueenDevil, input, 'gitclone')
                } catch (e) {
                  return await QueenDevil.client.sendMessage(QueenDevil.jid,'Sorry I Could Not Find master Branch Of this Repo!\n\n Use Like This\n.gitclone RepoUrl/Branch',MessageType.text, { quoted: QueenDevil.data})
                  }
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'igprop ?(.*)',   // Instagram Profile Info
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        try {
await sendMessageDownloader(QueenDevil, input, 'igprop')
                } catch (e) {
                  return await QueenDevil.client.sendMessage(QueenDevil.jid,'Sorry I Could Not Find It!',MessageType.text, { quoted: QueenDevil.data})
                  }
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'fb ?(.*)',     // Facebook Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
await sendMessageDownloader(QueenDevil, input, 'facebook')
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'apk ?(.*)',   // Apksearch with apkmirror site
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
await sendMessageDownloader(QueenDevil, input, 'apksearch');
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'getapk ?(.*)',   // APK DOWNLOAD APKMIRRIR LINK
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        try {
await downloadapkDevilQueen(QueenDevil, input);
               } catch (e) {
                  return await QueenDevil.client.sendMessage(QueenDevil.jid,'Sorry I Could Not Find This Apk!',MessageType.text, { quoted: QueenDevil.data})
                  }
})); 

DevilQueen['IntroduceCMD']({
        pattern: 'playstore ?(.*)',   // Apk Search With Apk Mirrir Site
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        try {
await sendMessageDownloader(QueenDevil, input, 'playstoresearch');
                } catch (e) {
                  return await QueenDevil.client.sendMessage(QueenDevil.jid,'Sorry I Could Not Find Your Search!',MessageType.text, { quoted: QueenDevil.data})
                  }
})); 
DevilQueen['IntroduceCMD']({
        pattern: 'brodcast ?(.*)',    // Brodcast Without Making List (unlimited user add option)
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
if (input[1] == 'add') {
await sendMessageAddBrodcast(QueenDevil, input,'add')
} else if (input[1] == 'close') {
await sendMessageAddBrodcast(QueenDevil, input,'removeall')
} else if (input[1] == 'remove') {
await sendMessageAddBrodcast(QueenDevil, input,'removeone')
} else {
await sendMessageBrodcast(QueenDevil, input)
}
})); 
DevilQueen['IntroduceCMD']({
        pattern: 'sticker ?(.*)',   // Sticker Maker With Packname && Author Name
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
await sendMessageDownloader(QueenDevil, input, 'stickerwithpackname');
})); 
DevilQueen['IntroduceCMD']({
        pattern: 'ss ?(.*)',   //Site To Screenshot
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        try {
await sendMessageDownloader(QueenDevil, input, 'sitescreenshot');
                } catch (e) {
                  return await QueenDevil.client.sendMessage(QueenDevil.jid,'Sorry I Could Not Find This Site!',MessageType.text, { quoted: QueenDevil.data})
                  }
})); 
DevilQueen['IntroduceCMD']({
        pattern: 'spdf ?(.*)',   //Site To PDF
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        try {
await sendMessageDownloader(QueenDevil, input, 'sitepdf');
                } catch (e) {
                  return await QueenDevil.client.sendMessage(QueenDevil.jid,'Sorry I Could Not Find This Site!',MessageType.text, { quoted: QueenDevil.data})
                  }
})); 
DevilQueen['IntroduceCMD']({
        pattern: 'downimg ?(.*)',   //
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
await sendMessageDownloader(QueenDevil, input, 'imagedown');
})); 
DevilQueen['IntroduceCMD']({
        pattern: 'song ?(.*)',   // Youtube Song Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        try {
await sendMessageDownloader(QueenDevil, input, 'downsong');
                } catch (e) {
                  return await QueenDevil.client.sendMessage(QueenDevil.jid,'Sorry I Could Not Find This Song!',MessageType.text, { quoted: QueenDevil.data})
                  }
})); 
DevilQueen['IntroduceCMD']({
        pattern: 'video ?(.*)',   // Youtube Video Downloader
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        try {
await sendMessageDownloader(QueenDevil, input, 'downvideo');
                } catch (e) {
                  return await QueenDevil.client.sendMessage(QueenDevil.jid,'Sorry I Could Not Find! Try With Youtube URl',MessageType.text, { quoted: QueenDevil.data})
                  }
})); 
DevilQueen['IntroduceCMD']({
        pattern: 'ytd ?(.*)',   // helpers
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        try {
await sendMessageDownloader(QueenDevil, input, 'dlvid');
                } catch (e) {
                        try{
                        await ytdocdlBackupForDevilQueen(QueenDevil, input)
                              }  catch(e) {
                  return await QueenDevil.client.sendMessage(QueenDevil.jid,'Not Found This Youtube Video!',MessageType.text, { quoted: QueenDevil.data})
                  }}
})); 
DevilQueen['IntroduceCMD']({
        pattern: 'tikd ?(.*)', //helper
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        try {
await sendMessageDownloader(QueenDevil, input, 'dltik');
                } catch (e) {
                  return await QueenDevil.client.sendMessage(QueenDevil.jid,'Sorry I Could Not Find This Tiktok Video!',MessageType.text, { quoted: QueenDevil.data})
                  }
})); 
DevilQueen['IntroduceCMD']({
        pattern: 'dfb ?(.*)',   // helper
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenDevil, input) => { 
        try {
await sendMessageDownloader(QueenDevil, input, 'dlfb');
                } catch (e) {
                  return await QueenDevil.client.sendMessage(QueenDevil.jid,'Sorry I Could Not Find This Facebook Video!',MessageType.text, { quoted: QueenDevil.data})
                  }
})); 
