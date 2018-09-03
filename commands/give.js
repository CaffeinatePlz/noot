/**
 * Gives a user a role
 * @param {module:discord.js.Client} bot
 * @param {module:discord.js.Message} message
 * @param {string[]} [args]
 * @returns void
 */
exports.run = (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {  message.reply("No no no *YOU'RE* not allowed to do that! "); }
    let member = message.mentions.members.first();
    args.shift();
    const newRole = args.join(" ");
    let role = message.guild.roles.find("name", newRole);
    member.addRole(role).then(() => {
        message.channel.send("Role given!");
    }).catch(() => {
        message.reply("I was unable to give the role");
    });
};

/**
 * Config for `five`
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
    name: "give",
    description: "give someone a role",
    usage: "give <user> <role>"
};
