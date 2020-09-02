const fs = require("fs");
const TDU_GUILD_ID = "605683682493333507";
const CC_GUILD_ID = "655240399136358420";
const TCA_GUILD_ID = "606986694905823233";
const TEST_GUILD_ID = "356764662760472576";
const PERSONAL_GUILD_ID = "374179059212484608";

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
            let x = message.guild.id;
            if (x == TDU_GUILD_ID && !command_name.conf.servers.includes('tdu')) return;
            if (x == TCA_GUILD_ID && !command_name.conf.servers.includes('tca')) return;
            if (x == CC_GUILD_ID && !command_name.conf.servers.includes('cc')) return;
            if (x == PERSONAL_GUILD_ID && !command_name.conf.servers.includes('personal')) return;
			if (x != TDU_GUILD_ID && x!= CC_GUILD_ID && x != TCA_GUILD_ID && x!= TEST_GUILD_ID && x!= PERSONAL_GUILD_ID && !command_name.conf.servers.includes('global')) return;

            if (command_name.conf.enabled) {
                try {
                    command_name.run(bot, message, args);
                } catch (err) {
                    message.channel.send("Oh no! We encountered an error:\n```" + err.stack + "```")
                }
            }
        }
    }
}
