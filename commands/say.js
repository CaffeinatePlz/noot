/**
 * Make the bot say something
 * @param {module:discord.js.Client} bot
 * @param {module:discord.js.Message} message
 * @param {stirng[]} [args]
 * @returns void
 */
exports.run = (bot, message, args) => {
    if (message.author.id === "338163785082601473"){
        const channelID = args[0].replace("<#", "").replace(">", "").replace("!", "");
        args.shift();
        const sayMessage = args.join(" ");
        message.delete();
        message.guild.channels.get(channelID).send(sayMessage);
    } else {
        message.channel.send("No no no *YOU'RE* not allowed to do that! " + message.author);
    }
};

/**
 * Config for `say`
 * Defaults:
 * `enabled`: `true`
 * `guildOnly`: `false`
 * `aliases`: `[]`
 * `botPerms`: `[]`
 * `memberPerms`: `[]`
 * @type {{enabled: boolean, guildOnly: boolean, aliases: Array, botPerms: Array, memberPerms: Array}}
 */
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    botPerms: [],
    memberPerms: []
};

/**
 *
 * @type {{name: string, description: string, usage: string}}
 */
exports.help = {
    name: "say",
    description: "say something",
    usage: "say <message>"
};