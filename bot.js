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
 const prefix = "`"
client.on('message', message => {
  const args = message.content.slice(prefix.length).split(' ');
  const cmd = args.shift().toLowerCase();
  switch (cmd) {
    case 'ping':
      message.channel.send('pong')
      break;
    case 'help':
      message.channel.send('ping: returns pong.\n`help, this command.\n`annoy, spam the target with messages.')
      break;
    case 'annoy':
      if (message.author.id == config.owner) {
        message.channel.send(`Hello god`);
      }
      if (!args.length){
        message.channel.send(`${message.author.toString()} Bruh who am I supposed to spam.`);
      } else if (args.length == 1) {
        message.channel.send(`Hey ${args} hey ${args} hey ${args} hey ${args} hey ${args} yeah blame ${message.author.toString()} for this`)
      } else {
        message.channel.send('Woah, slow down. I can\'t handle more than one!');
      }
      break;
  }
});
