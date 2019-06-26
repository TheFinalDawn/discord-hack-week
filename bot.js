//
// NOTICE: VERSION IS TO BE UPDATED EVERY UPDATE.
//
const softwaregore = [
  "https://i.redd.it/ox48gwl1tk231.jpg",
  "https://i.redd.it/c6phpvqq9a431.jpg",
  "https://i.imgur.com/4O0PM0Q.png",
  "https://i.redd.it/4uf7i1dva7331.png",
  "https://i.redd.it/8f71tla5al131.jpg",
  "https://i.redd.it/dq4q290y0c331.png",
  "https://i.imgur.com/ZAyentM.jpg",
  "https://i.redd.it/3686d9yldk031.jpg",
]
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
 const prefix = "`";
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
    case 'softwaregore':
      message.channel.send(`here, an image from r/softwaregore to show how broken programs are.`, {
      file: softwaregore[Math.floor(Math.random() * softwaregore.length)]
      });
      break;
  }
});
