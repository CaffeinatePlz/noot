const fs = require("fs");
const MarkovChain = require("markovchain");

/**
 *
 * @param {module:discord.js.Client} bot
 * @param {module:discord.js.Message} message
 * @param {string[]} [args]
 * @returns void
 */
exports.run = (bot, message, args) => {
    const koalafacts = new MarkovChain(fs.readFileSync("./data/frc.txt", "utf8"));
    message.channel.send(`${koalafacts.start("FRC").end(" ").process()}`);
};

/**
 * Config for `frcChain`
 * Defaults:
 * `enabled`: `true`
 * `guildOnly`: `false`
 * `aliases`: `["frc", "frcwords", "whatisfrc"]`
 * `botPerms`: `[]`
 * `memberPerms`: `[]`
 * @type {{enabled: boolean, guildOnly: boolean, aliases: string[], botPerms: Array, memberPerms: Array}}
 */
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["frc", "frcwords", "whatisfrc"],
    botPerms: [],
    memberPerms: []
};

/**
 *
 * @type {{name: string, description: string, usage: string}}
 */
exports.help = {
    name: "frcChain",
    description: "A Markov Chain for FRC",
    usage: "frcChain"
};
