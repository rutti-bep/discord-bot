'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();

const yukariSpeak = require('./yukari-speak/main.js');
const cronSchedule  = require('./cronSchedule.js');

var schedule = new cronSchedule.Schedule();

var token = process.env.DISCORD_TOKEN;
var connection;
var clientIdRegexp;

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

  function yukariSend(text){
    yukariSpeak.yukariSend(text,function(){
      const dispatcher = connection.playFile(__dirname+"/yukari-speak/test.ogg",{});
    })
  }

client.on('ready', () => {
  console.log('I am ready!');
  console.log(client.user.id)
  clientIdRegexp = new RegExp("<@"+client.user.id+">");

  var speakChannelId = '';
  client.channels.forEach(function(value){
    if(value.name == "bot-test" && value.type == 'voice'){
      speakChannelId = value.id
        console.log(value.name,value.id);
    }
  });
  let voiceChannel = client.channels.get(speakChannelId);

  voiceChannel.join()
    .then(_connection =>  {
      connection = _connection;
      yukariSend("起動しました");
    })
  .catch(console.error);
  schedule.add("0 0 7-9 * * *",function(){yukariSend("おはよう")});
  schedule.add("0 0 10-16 * * *",function(){yukariSend("こんにちは")});
  schedule.add("0 0 17-6 * * *",function(){yukariSend("こんばんは")});

});

client.on('message', message => {
  console.log(message);
  if (message.content.match(clientIdRegexp)){
    if (message.content === 'ping') {
      yukariSend("pong");
    }
    if (message.content.match(/ようこそジャパリパークへ/g)){
      // message.channel.sendMessage(japaripark);
      yukariSend(japaripark)
    }
    if (message.content.match(/N高/g)){
      yukariSend('しね')
    }
  }
});


client.login(token);
