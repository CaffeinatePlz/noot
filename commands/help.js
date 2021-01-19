const TDU_GUILD_ID = "605683682493333507";
const CC_GUILD_ID = "655240399136358420";
const TCA_GUILD_ID = "606986694905823233";
const TEST_GUILD_ID = "356764662760472576";
const PERSONAL_GUILD_ID = "374179059212484608";

exports.run = (bot, message, args) => {
    const Discord = require('discord.js');
    if (!args[0]) {
        for (i=0; i<=Math.floor(bot.commands.size/24); i++) {
            var helpbox = new Discord.MessageEmbed();
            helpbox.setAuthor(bot.user.username,bot.user.avatarURL)
                .setTitle("Command List")
                .setDescription(`Use +help <commandname> for details`)
                .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]);
            if (i==Math.floor(bot.commands.size/24)){
                x = bot.commands.size%24;
            } else {
                x = 20;
            }
            for (y=0; y<x; y++) {
                c = bot.commands.array()[i*24+y];
                if (
                    (message.guild.id == TDU_GUILD_ID && c.conf.servers.includes('tdu'))
                    || (message.guild.id == TCA_GUILD_ID && c.conf.servers.includes('tca'))
                    || (message.guild.id == CC_GUILD_ID && c.conf.servers.includes('cc'))
                    || (message.guild.id == TEST_GUILD_ID && c.conf.servers.includes('test'))
                    || (message.guild.id == PERSONAL_GUILD_ID && c.conf.servers.includes('test'))
                    || (message.guild.id == process.env.FIVEUP_GUILD_ID && c.conf.servers.includes('5up'))
                    || (message.guild.id != process.env.FIVEUP_GUILD_ID && message.guild.id != TDU_GUILD_ID && message.guild.id != TCA_GUILD_ID && message.guild.id != CC_GUILD_ID && message.guild.id != PERSONAL_GUILD_ID && c.conf.servers.includes('global'))
                ) {
                    helpbox.addField(c.help.name, c.help.description);
                }  else {

                }
            }
            let user = message.author;
            user.send({embed: helpbox});
        }
    } else {
        let command = '';
        if (bot.commands.has(args[0])) {
            command = bot.commands.get(args[0]);
        } else if (bot.aliases.has(args[0])) {
            command = bot.commands.get(bot.aliases.get(args[0]));
        };
        if (!command) return message.reply(`Are you sure that command exists?`);
        var helpCommand = new Discord.MessageEmbed();
        helpCommand.setAuthor(bot.user.username,bot.user.avatarURL)
            .setTitle(command.help.name)
            .addField('Description', `${command.help.description}`)
            .addField('Usage', `+${command.help.usage}`)
            .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
        if (command.conf.aliases != "") {
            helpCommand.addField('Aliases', `${command.conf.aliases.join(', ')}`)
        }
        let user = message.author;
        user.send({embed: helpCommand});
    };
    message.react('✉️');
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['h', 'halp'],
    botPerms: [],
    memberPerms: [],
    servers: ['global','tdu','tca','cc','test']
};
exports.help = {
    name: 'help',
    description: 'Displays everything noot can do!',
    usage: 'help <command [optional]>'
};




