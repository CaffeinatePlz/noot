/**
 * Set someone's nickname
 * @param {module:discord.js.Client} bot
 * @param {module:discord.js.Message} message
 * @param {string[]} [args]
 * @returns void
 */
exports.run = (bot, message, args) => {
    const person = message.mentions.users.first();
    const authorID = message.author.id;
    const userID = args[0].replace("<@", "").replace(">", "").replace("!", "");
    if (message.member.hasPermission("MANAGE_NICKNAMES")){
        if (person !== null){
            args.shift();
            const newName = args.join(" ");
            console.log(person);
            message.guild.members.get(userID).setNickname(newName);
            message.channel.send("Nickname set!");
        } else {
            const newName = args.join(" ");
            message.guild.members.get(authorID).setNickname(newName);
        }
    } else {
        message.channel.send("No no no *YOU'RE* not allowed to do that! " + message.author);
    }
};

/**
 * Config for `setNick`
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
    name: "setnick",
    description: "change someone else's nick",
    usage: "setnick <user>"
};
