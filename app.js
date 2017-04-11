'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();
const voiceChannel =  new Discord.VoiceChannel(client);
const yukariSpeak = require('./yukari-speak/main.js')

yukariSpeak.yukariSend("うにゃ",function(text){
  console.log("yukari:",text)
})

var token = process.env.DISCORD_TOKEN;
var japaripark = [
  "Welcome to ようこそジャパリパーク!",
  "今日もドッタンバッタン大騒ぎ",
  "",
  "うー！がぉー！",
  "高らかに笑い笑えば フレンズ（フレンズ）",
  "喧嘩して すっちゃかめっちゃかしても仲良し",
  "",
  "けものは居ても のけものは居ない",
  "本当の愛はここにある",
  "ほら 君も手をつないで大冒険",
  "",
  "（ワン・ツー・スリー)",
  "Welcome to ようこそジャパリパーク！",
  "今日もドッタンバッタン大騒ぎ ",
  "姿かたちも十人十色 だから魅かれ合うの",
  "夕暮れ空に 指をそっと重ねたら",
  "はじめまして（はじめまして",
  "君をもっと知りたいな",
  "",
  "うー！がぉー！",
  "ララララ ララララ Oh, Welcome to the ジャパリパーク",
  "ララララ ララララララ 集まれ友達 ",
  "ララララ ララララ Oh, Welcome to the ジャパリパーク！",
  "ララララ ララララララ 素敵な旅立ち",
  "ようこそジャパリパーク！"
].join("\n");

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  console.log(message);
    if (message.content === 'ping') {
          message.reply('pong');
            }
    if (message.content.match(/ようこそジャパリパークへ/g)){
          message.channel.sendMessage(japaripark);
    }
});


client.login(token);
