/**
 * Bans the specified user
 * @param {module:discord.js.Client} bot
 * @param {module:discord.js.Message} message
 * @param {string[]} args
 * @returns void
 */
exports.run = (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) { message.reply( "No no no *YOU'RE* not allowed to do that! "); }
    const member = message.mentions.members.first() || message.guild.members.get(args[0]);

    if (!member) { message.reply("Please mention a valid member of this server"); }
    if (!member.kickable) { message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?"); }
    let reason = args.slice(1).join(" ");
    if (!reason) { reason = "No reason provided"; }
    member.ban(reason);
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
};

/**
 * Config for `ban`
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
    name: "ban",
    description: "swing the ban hammer",
    usage: "ban <member> <reason>"
};
