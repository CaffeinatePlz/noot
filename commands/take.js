/**
 * Take a role from someone
 * @param {module:discord.js.Client} bot
 * @param {module:discord.js.Message} message
 * @param {string[]} [args]
 */
exports.run = (bot, message, args) => {
    if (message.author.id !== "338163785082601473") {return;}
    let member = message.mentions.members.first();
    args.shift();
    const newRole = args.join(" ");
    let role = message.guild.roles.find("name", newRole);
    member.removeRole(role).catch(console.error);
    message.channel.send("Role taken!");
};

/**
 * Config for `take`
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
    name: "take",
    description: "take a role from someone",
    usage: "take <user> <role>"
};
