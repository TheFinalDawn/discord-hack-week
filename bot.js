//
// NOTICE: VERSION IS TO BE UPDATED EVERY UPDATE.
//

// load materials
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';
const Discord = require('discord.js');
const client = new Discord.Client(
  token: auth.token,
  autorun: true
);
 client.on('ready', function (evt) {
     logger.info('Connected');
     logger.info('Logged in as: ');
     logger.info(bot.username + ' - (' + bot.id + ')');
 });
client.on('message', message => {
  switch (message.content) {
    case 'ping':
      message.channel.send('pong')
      break;
    case '$help':
      message.channel.send(`ping, $help.`)
      break;

  }
});
