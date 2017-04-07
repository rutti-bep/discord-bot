'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();

var token = process.env.DISCORD_TOKEN;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
          message.reply('pong');
            }
});

client.login(token);