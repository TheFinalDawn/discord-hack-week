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

// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // The $ is the prefix. Could make it changable.
    let prefix = "d$";
    if (message.substring(0, 2) == prefix && !message.author.bot) {
        var args = message.substring(1).split('/ +/');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: '**General Commands**\nNothing here yet...\n**Debug Commands (hint, they start with $debug!cmdname)**\n$debug!args-test'
                    // Update every time you add a cmd.
                });
            break;
            case 'debug!args-test':
              if (!args.length) {
                bot.sendMessage({
                  to: channelID,
                  message: `You didn't provide any arguments, ${message.author.userID}!`
                });
              }
              message.channel.send(`Command name: ${cmd}\nArguments: ${args}`);
              break;
            // Add more cases to add more commands.

         }
     }
});
