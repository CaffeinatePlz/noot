const MarkovChain = require("markovchain");
const fs = require("fs");

/**
 * Hilarious chaos garunteed
 * @param {module:discord.js.Client} bot
 * @param {module:discord.js.Message} message
 * @param {string[]} [args]
 */
exports.run = (bot, message, args) => {
    const koalafacts = new MarkovChain(fs.readFileSync("./data/koalafacts.txt", "utf8"));
    message.channel.send(`${koalafacts.start("Koalas").end(" ").process()}`);
};

/**
 * Config for `koalachain`
 * Defaults:
 * `enabled`: `true`
 * `guildOnly`: `false`
 * `aliases`: `["koalachains", "kc"]`
 * `botPerms`: `[]`
 * `memberPerms`: `[]`
 * @type {{enabled: boolean, guildOnly: boolean, aliases: string[], botPerms: Array, memberPerms: Array}}
 */
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["koalachains", "kc"],
    botPerms: [],
    memberPerms: []
};

/**
 *
 * @type {{name: string, description: string, usage: string}}
 */
exports.help = {
    name: "koalachain",
    description: "A Markov Chain version of +koalafacts!",
    usage: "koalachain"
};
