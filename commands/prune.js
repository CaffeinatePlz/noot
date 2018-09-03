/**
 *
 * @param {module:discord.js.Client} bot
 * @param {module:discord.js.Message} message
 * @param {string[]} [args]
 * @returns void
 */
exports.run = (bot, message, args) => {
    if (message.member.hasPermission("MANAGE_MESSAGES") || message.author.id === "338163785082601473") {
        const num = parseInt(args[0]);
        if (!isNaN(num)) {
            message.channel.bulkDelete(num + 1);
            message.reply(num + " messages deleted!")
                .then((msg2) => setTimeout(() => {
                    msg2.delete();
                }, 5000));
        } else {
            message.reply("Please let me know how many messages you would like to delete!");
        }
    } else {
        message.reply("You do not have permission to do this!");
    }
};

/**
 * Config for `prune`
 * Defaults:
 * `enabled`: `true`
 * `guildOnly`: `false`
 * `aliases`: `["purge", "delete"]`
 * `botPerms`: `[]`
 * `memberPerms`: `[]`
 * @type {{enabled: boolean, guildOnly: boolean, aliases: string[], botPerms: Array, memberPerms: Array}}
 */
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["purge", "delete"],
    botPerms: [],
    memberPerms: []
};

/**
 *
 * @type {{name: string, description: string, usage: string}}
 */
exports.help = {
    name: "prune",
    description: "Delete a number of messages.",
    usage: "prune <number>"
};
