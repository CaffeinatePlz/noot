/**
 * Sets a nickname
 * @param {module:discord.js.Client} bot
 * @param {module:discord.js.Message} message
 * @param {string[]} [args]
 */
exports.run = (bot, message, args) => {
    const person = message.mentions.users.first();
    const authorID = message.author.id;
    const newName = args.join(" ");
    if (person !== null){
        message.channel.send("No no no *YOU'RE* not allowed to do that! " + message.author);
    } else {
        message.guild.members.get(authorID).setNickname(newName);
        message.channel.send("Nickname set!");
    }
};

/**
 * Config for `nick`
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
    name: "nick",
    description: "set your nickname",
    usage: "nick <new nick>"
};
