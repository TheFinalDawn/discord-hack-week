//
// NOTICE: VERSION IS TO BE UPDATED EVERY UPDATE.
//

// load materials
var logger = require('winston');
var config = require('./config.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(config.token);
 client.on('ready', function (evt) {
     logger.info('Connected');
     logger.info('Logged in as: ');
     logger.info(client.username + ' - (' + client.id + ')');
 });
client.on('message', message => {
  switch (message.content) {
    case 'ping':
      message.channel.send('pong')
      break;
    case '`help':
      message.channel.send('ping, `help, `.')
      break;
    case '`':
      if (message.author.id == config.owner) {
        message.channel.send(`Hello god`);
      }
      message.channel.send(`${message.author.toString()}`);
      break;
  }
});
