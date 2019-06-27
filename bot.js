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
const client = new Discord.client();
client.login(config.token);
 client.on('ready', function (evt) { // connecting success.
     logger.info('Connected');
     logger.info(`Logged in as ${client.user.tag} (${client.user.id})`);
     client.user.setActivity(`Derping around on ${client.guilds.size} servers!`)
 });
 client.on("guildCreate", guild => { // joined a server
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers!`);
});

client.on("guildDelete", guild => { // left/removed from a server
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers!`);
});
 const prefix = "d!";
client.on('message', message => {
  if (message.author.bot || message.content.indexOf(prefix) !== 0) {return}; // Just to avoid issues
  const args = message.content.slice(prefix.length).split(' ');
  const cmd = args.shift().toLowerCase();
  switch (cmd) {
    case 'help':
      if (args.length == 0) {
        message.channel.send('note, run d!help [command] for help on that command!\n**General Commands**\nd!help, d!dice\n\n**Memes!**\nd!softwaregore, d!meme, d!annoy\n\n**Feedback Commands (The dev\'s \'favorite\')**\nd!cmd-suggest, d!meme-suggest, d!software-suggest, d!bug');
      } else if (args[0] == "help") {
        message.channel.send('**d!help**\nA very simple command, lists all the commands I (currently) respond to.\nUses: d!help, d!help [cmd]');
      } else if (args[0] == "annoy") {
        message.channel.send('**d!annoy**\nRun this command to get someone to come back online :wink:\nUses: d!annoy [username (e.g. @nightbot#0001)]');
      } else if (args[0] == "softwaregore") {
        message.channel.send('**d!softwaregore**\nGrabs a random image from r/softwaregore to show how broken programs like myself are.\nUses: d!softwaregore');
      } else if (args[0] == "software-suggest") {
        message.channel.send('**d!software-suggest**\nPosts a link to a form to fill out. Use this to suggest a tech fail to add to d!softwaregore!\nUses: d!software-suggest');
      } else if (args[0] == "cmd-suggest") {
        message.channel.send('**d!cmd-suggest**\nSuggest a command to be added.\nUses: d!cmd-suggest [command, optional description]');
      } else if (args[0] == "meme") {
        message.channel.send('**d!meme**\nGrabs a random meme from a list of memes, suggested by users. I\'ll do my best to keep it safe!\nUses: d!meme');
      } else if (args[0] == "meme-suggest") {
        message.channel.send('**d!meme-suggest**\nPosts a link to a form, where you can suggest a meme to be added to d!meme!\nUses: d!meme-suggest');
      } else if (args[0] == "dice") {
        message.channel.send('**d!dice**\nRoll for a number, be it a dexterity check, useless test, or whatever else it is that needs RNG.\nUses: d!dice (1 to 10), d!dice [max] (1 to max), d!dice [min] [max]');
      } else if (args[0] == "bug") {
        message.channel.send('**d!bug**\nReport a bug to the devs!\nUses: d!bug [Description of the error, including what you did. Feel free to link an image here!]');
      } else if (args[0] == "[COMMAND]") {
        message.channel.send('**d![COMMAND]**\n[DESCRIPTION]\nUses: [USAGE]');
        message.channel.send('Okay, I\'m back-- What did you do...')
        console.warn('Someone ran d!help [COMMAND]!');
      } else if (args.length < 0) {
        message.channel.send('Okay, how the actual heck did you manage to get negative arguments. Go run d!bug and explain what you did. And be detailed too, the dev isn\'t a mind reader!\n*Just, give me a second...*');
        console.error(`Ok something seriously messed up, ${message.author.toString()} managed to get negative arguments with d!help. ${cmd} ${args}`);
      }
      logger.info(`called d!help with arguments: ${args}`);
      break;
    case 'annoy':
      if (message.author.id == config.owner) {
        message.channel.send(`Hello god`);
      }
      if (!args.length){
        message.channel.send(`${message.author.toString()} Bruh who am I supposed to spam.`);
      } else if (args.length == 1) {
        message.channel.send(`Hey ${args} hey ${args} hey ${args} hey ${args} hey ${args} wake up`)
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
