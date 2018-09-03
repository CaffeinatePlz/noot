const fs = require("fs");
//const config = require("./config.json");

module.exports = (bot) => {
	bot.processMessage = function(message) {
		 	if (message.author.bot) return;
	  	if (message.isMentioned(bot.user)) {
				if (message.content.toLowerCase().includes("what's your prefix") || message.content.toLowerCase().includes("whats your prefix")) {
					message.reply(`my prefix for ${message.guild.name} is \`+\`!`);
				}
	  	}
			if(message.content.indexOf("+") == 0){
			  const args = message.content.slice(1).trim().split(/ +/g);
			  const command = args.shift().toLowerCase();
				var command_name = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command));
				if (!command_name) return;
				else if (command_name.conf.enabled) {
					try {
						command_name.run(bot, message, args);
					} catch (err) {
						message.channel.send("Oh no! We encountered an error:\n```" + err.stack + "```")
					}
				}
	  	}
		}
	}
