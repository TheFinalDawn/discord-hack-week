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
]; // Understand that I have no creativity.
const meme = [
  "https://i.redd.it/lv8a11cysp631.png",
  "https://i.redd.it/lyavd2kxsp631.jpg",
  "https://i.redd.it/8mr65wwssp631.jpg",
  "https://i.redd.it/kq7j8d7ssp631.jpg",
  "https://i.redd.it/ycl58pvnsp631.jpg",
];
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
      message.channel.send('ping: returns pong.\nd!help, this command.\nd!annoy, spam the target with messages.\nd!softwaregore, get an image from softwaregore (suggested by people like you!). Also check d!software-suggest.\nd!software-suggest, suggest an image to add to d!softwaregore!\nd!cmd-suggest, suggest a command to be added.\nd!meme, get a meme. Also see d!meme-suggest.\nd!meme-suggest, you know the drill, added these commands because I\'m lazy and uncreative.');
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
      logger.info('Called d!software-suggest. Go check the Google forms quick!');
      break;
    case 'meme':
      message.channel.send('Okey', {
        file: meme[Math.floor(Math.random() * meme.length)]
      });
      logger.info('Called d!meme.')
      break;
    case 'cmd-suggest':
      if (message.author.id == config.owner) {
        message.channel.send('Dude. You can literally make the command, you have token!');
      } else if (args.length > 0) {
        message.channel.send("Suggestion sent via terminal to the dev.");
        logger.info(`New Command Suggested. Info: ${args}`);
      } else if (args.length < 1) {
        message.channel.send(`${message.author.toString()} I kinda need a command to send.`);
      } else {
        message.channel.send(`Something broke. Number of Arguments: ${args.length}. Args: ${args}.`);
        logger.warn(`Command cmd-suggest encountered an error. Args: ${args}. Count: ${args.length}.`);
      }
      break;
    case 'meme-suggest':
      message.channel.send(`${message.author.toString()} Please fill out this form: https://forms.gle/wQYNJ7sR6hmAYSbf8`);
      logger.info('New meme suggested for d!meme. Check Google Forms.');
      break;
    default:
    message.channel.send('Sorry, I didn\'t understand that. We\'re you talking to me?');
    logger.warn('Failed to call command.');
  }
});
