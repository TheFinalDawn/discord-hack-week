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
 bot.on('ready', function (evt) { // connecting success.
     logger.info('Connected');
     logger.info('Logged in as: ');
     logger.info(bot.username + ' - (' + bot.id + ')');
     bot.user.setActivity(`Derping around on ${bot.guilds.size} servers!`)
 });
 bot.on("guildCreate", guild => { // joined a server
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers!`);
});

bot.on("guildDelete", guild => { // left/removed from a server
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers!`);
});
 const prefix = "d!";
bot.on('message', async message => {
  if (message.author.bot || message.content.indexOf(prefix) !== 0) {return}; // Just to avoid issues
  const args = message.content.slice(prefix.length).split(' ');
  const cmd = args.shift().toLowerCase();
  switch (cmd) {
    case 'help':
      message.channel.send('d!help, this command.\nd!annoy, spam the target with messages.\nd!softwaregore, get an image from softwaregore (suggested by people like you!). Also check d!software-suggest.\nd!software-suggest, suggest an image to add to d!softwaregore!\nd!cmd-suggest, suggest a command to be added.\nd!meme, get a meme. Also see d!meme-suggest.\nd!meme-suggest, you know the drill, added these commands because I\'m lazy and uncreative.\nd!dice, roll a number. (run d!dice -h for info.)\nd!bug, alert the dev to an error (or generally something strange) that happened.');
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
      case 'dice':
        message.channel.send('Rolling...');
        if (args[0] > 2000000000 || args[1] > 2000000000) {
          return message.channel.send('Sorry, can\'t roll numbers bigger than 2 billion.\n*hah, you thought you could break me...*');
        }
        if (args.length == 2) {
          message.channel.send(`Rolled a ${Math.floor(Math.random() * (args[1] - args[0] + 1) + args[0])}.`);
          logger.info(`rolled between ${args[0]} and ${args[1]}`);
        } else if (args.length == 1 && args[0] != "-h") {
          message.channel.send(`Rolled a ${Math.floor(Math.random() * args[0] + 1)}`);
          logger.info(`Rolled between 1 and ${args[0]}`);
        } else if (args[0] == "-h") {
          message.channel.send('Run only d!dice to get a number between 1 and 10. Provide 1 number to get a number between 0 and that number. Give me a minimum and a maximum to get a number between the two.');
        } else {
          message.channel.send(`Rolled a ${Math.floor(Math.random() * 10 + 1)}`);
          logger.info('Rolled between 1 and 10');
        }
        break;
      case 'bug':
        if (!args.length) {
          message.channel.send(`Could you explain what happened?`);
        } else {
          message.channel.send(`Note sent to the dev.`);
          let notice = args.join(" ");
          console.warn(`---ALERT---\nBug reported by ${message.author.toString()}.`);
          console.warn(`Details: ${notice}\n---END ALERT---`);
        }
        break;
      case '':
        message.channel.send('Uhh...')
        break;
      default:
      message.channel.send('Command error.');
      console.error(`Command error. Command: ${cmd}. Args: ${args}`);
  }
});
