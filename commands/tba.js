const Discord = require("discord.js");
const TBA = require("tba-api-storm");

/**
 *
 * @param {module:discord.js.Client} bot
 * @param {module:discord.js.Message} message
 * @param {string[]} [args]
 * @returns void
 */
exports.run = (bot, message, args) => {
    let tba = new TBA(process.env.TBA_TOKEN);
    const teamNum = parseInt(args[0]);
    if (!isNaN(teamNum)) {
        const info = new Discord.RichEmbed();
        tba.getTeam(teamNum).then(a => {
            info.setAuthor("FIRST® Robotics Competition Team " + teamNum,)
                .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
                .addField("Name", a.nickname, true)
                .addField("Rookie Year", a.rookie_year, true)
                .addField("Location", `${a.city}, ${a.state_prov}, ${a.country}`, true)
                .addField("Website", a.website, true);
            if (a.motto !== null) { info.addField("Motto", a.motto, true); }
            message.channel.send({ embed: info });
        }).catch(e => { message.channel.sendMessage("```js\n"+e+"```"); message.channel.sendMessage("I cannot find this team. Does it exist?"); });
    } else {
        message.channel.sendMessage("Please mention a team (`+tba <team_number>`)");
    }
};

/**
 * Config for `tba`
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
    name: "tba",
    description: "Displays info about a FRC team!",
    usage: "tba <team_number>"
};
