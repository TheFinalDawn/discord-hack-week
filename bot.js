//
// NOTICE: VERSION IS TO BE UPDATED EVERY UPDATE.
//
// list of images for `softwaregore
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
const bot = new Discord.Client();
bot.login(config.token);
 bot.on('ready', function (evt) {
     logger.info('Connected');
     logger.info('Logged in as: ');
     logger.info(bot.username + ' - (' + bot.id + ')');
 });
 const prefix = "d!";
bot.on('message', message => {
  if (message.author == bot.user) {return} // Just to avoid issues
  const args = message.content.slice(prefix.length).split(' ');
  const cmd = args.shift().toLowerCase();
  switch (cmd) {
    case 'ping':
      message.channel.send('pong');
      logger.info('called ping');
      break;
    case 'help':
      message.channel.send('ping: returns pong.\nd!help, this command.\nd!annoy, spam the target with messages.\nd!softwaregore, get an image from softwaregore (suggested by people like you!). Also check d!software-suggest.\nd!software-suggest, suggest an image to add to d!softwaregore!');
      logger.info('called d!help');
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
      logger.info('called d!annoy');
      break;
    case 'softwaregore':
      message.channel.send(`here, an image from r/softwaregore to show how broken us programs are.`, {
      file: softwaregore[Math.floor(Math.random() * softwaregore.length)]
      });
      logger.info('called d!softwaregore')
      break;
    case 'software-suggest':
      message.channel.send(`${message.author.toString()} Go check out https://forms.gle/pfEn2cM7SYHrcRjD8 to suggest an addition. Thank you in advance!`)
      break;
  }
});
