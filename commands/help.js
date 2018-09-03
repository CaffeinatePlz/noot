const Discord = require("discord.js");

/**
 * Displays this bots capabilities
 * @param {module:discord.js.Client} bot
 * @param {module:discord.js.Message} message
 * @param {string[]} [args]
 * @returns void
 */
exports.run = (bot, message, args) => {
    if (!args[0]) {
        for (let i = 0; i <= Math.floor(bot.commands.size / 24); i++) {
            const helpbox = new Discord.RichEmbed();
            helpbox.setAuthor(bot.user.username, bot.user.avatarURL)
                .setTitle("Command List")
                .setDescription("Use +help <commandname> for details")
                .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]);
            let x;
            if (i === Math.floor(bot["commands"].size / 24)) {
                x = bot.commands.size % 24;
            } else {
                x = 20;
            }
            for (let y = 0; y < x; y++) {
                let c = bot.commands.array()[i * 24 + y];
                helpbox.addField(c.help.name, c.help.description);
            }
            message.channel.send({ embed: helpbox });
        }
    } else {
        let command = "";
        if (bot.commands.has(args[0])) {
            command = bot.commands.get(args[0]);
        } else if (bot.aliases.has(args[0])) {
            command = bot.commands.get(bot.aliases.get(args[0]));
        }
        if (!command) { message.reply("Are you sure that command exists?"); }
        const helpCommand = new Discord.RichEmbed();
        helpCommand.setAuthor(bot.user.username, bot.user.avatarURL)
            .setTitle(command.help.name)
            .addField("Description", `${command.help.description}`)
            .addField("Usage", `+${command.help.usage}`)
            .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]);
        if (command.conf.aliases !== "") {
            helpCommand.addField("Aliases", `${command.conf.aliases.join(", ")}`);
        }
        message.channel.send({
            embed: helpCommand
        });
    }
};

/**
 * Config for `help`
 * Defaults:
 * `enabled`: `true`
 * `guildOnly`: `false`
 * `aliases`: `["h", "help"]`
 * `botPerms`: `[]`
 * `memberPerms`: `[]`
 * @type {{enabled: boolean, guildOnly: boolean, aliases: string[], botPerms: Array, memberPerms: Array}}
 */
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["h", "halp"],
    botPerms: [],
    memberPerms: []
};

/**
 *
 * @type {{name: string, description: string, usage: string}}
 */
exports.help = {
    name: "help",
    description: "Displays everything noot can do!",
    usage: "help <command [optional]>"
};
