/**
 * Make someone go sleep (it really works)
 * @param {module:discord.js.Client} bot
 * @param {module:discord.js.Message} message
 * @param {string[]} [args]
 */
exports.run = (bot, message, args) => {
    const responses = [
        "GO TO SLEEP! ",
        "IT'S TIME TO SLEEP! ",
        "HAYLEY WILL HUNT YOU DOWN IF YOU DON'T SLEEP, ",
        "Please sleep? ",
    ];

    const sleeper = message.mentions.users.array()[0];
    const msg = responses[Math.floor(Math.random() * responses.length)];
    if (sleeper !== null) {
        message.channel.send(msg + sleeper + "\nhttps://cdn.discordapp.com/attachments/399740385221672974/469742325963292712/0jwZ3Cq.png");
    //https://i.imgur.com/6tHfvIM.jpg
    } else {
        message.channel.send("please mention someone");
    }
};

/**
 * Config for `sleep`
 * Defaults:
 * `enabled`: `true`
 * `guildOnly`: `false`
 * `aliases`: `["slep", "gosleep"]`
 * `botPerms`: `[]`
 * `memberPerms`: `[]`
 * @type {{enabled: boolean, guildOnly: boolean, aliases: string[], botPerms: Array, memberPerms: Array}}
 */
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["slep", "gosleep"],
    botPerms: [],
    memberPerms: []
};

/**
 *
 * @type {{name: string, description: string, usage: string}}
 */
exports.help = {
    name: "sleep",
    description: "Everyone needs some sleep.",
    usage: "sleep <member>"
};
