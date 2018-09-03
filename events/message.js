//constants

// eslint-disable-next-line no-unused-vars
const JARED_ID = "133350262420013056";
// eslint-disable-next-line no-unused-vars
const HAYL_ID = "338163785082601473";
// eslint-disable-next-line no-unused-vars
const HAYL_GUILD_ID = "374179059212484608";

const nootLove = [
    "you're awesome! :heart:",
    "hey you, you're pretty cool!",
    "I :clap: appreciate :clap: you!"
];

//functions

/**
 *
 * @param {string} text - text to search in
 * @param {string[]} items - items to search for in `text`
 * @returns boolean
 */
function includes(text, items) {
    items.forEach((item) => {
        if (text.includes(item)) { return true; }
    });
    return false;
}


//variables

/**
 *
 * @type {{selector: (function(message: module:discord.js.Message): boolean), reply: (function(message: module:discord.js.Message): string)}[][]}
 */
let serverSpecificMessages;
serverSpecificMessages[HAYL_GUILD_ID] = [
    {
        selector: (message) => { return includes(message.content.toLowerCase(), ["sleep", "go to sleep", "need sleep", "needs sleep"]); },
        reply:  () => { return "Go to sleep!"; }
    },
    {
        selector: (message) => { return includes(message.content.toLowerCase(), ["fight", "fite"]); },
        reply: () => { return "(ง'̀-'́)ง"; }
    },
    {
        selector: (message) => { return includes(message.content.toLowerCase(), ["gracious professionalism", "gp"]); },
        reply: () => { return "*CLAP CLAP* WOOOOOO!!!!!"; }

    },
    {
        selector: (message) => { return includes(message.content.toLowerCase(), ["noot"]); },
        reply: () => { return "Noot noot?"; }
    },
    {
        selector: (message) => {
            return includes(message.content.toLowerCase(), ["garbage", "nou", ":nou:", "trash"]) ||
            message.content.toLowerCase().match(/(n\s?o+|n\s?a\s?y+|n\s?o\s?p\s?e)([,.!*\s\n]+)(u|y\s?o\s?u|m\s?e|t\s?h\s?(e\s?){2,})\s?/); 
        },
        reply: (message) => {
            const msg = nootLove[Math.floor(Math.random() * nootLove.length)];
            return "**" + message.author.username + "**, " + msg;
        }
    }
];


//exports

/**
 * Processes the received message
 * @param {module:discord.js.Client} bot
 * @param {module:discord.js.Message} message
 * @returns {Promise<void>}
 */
module.exports = async (bot, message) => {
    if (message.channel.type === "dm" && message.author.id !== bot.user.id) {
        console.log("[DM] " + message.channel.recipient.username + " | " + message.content);
        /*channel_ID = '400779864191401984';
        guild_ID = '356764662760472576';
        bot.guilds.get(guild_ID).channels.get(channel_ID).send(message.content + " [DM]" + message.channel.recipient.username + " <@338163785082601473>");*/
        if (message.author.id !== "338163785082601473") {
            const userID = "338163785082601473";
            const guildID = "374179059212484608";
            bot.guilds.get(guildID).members.get(userID).send("[DM] | " + message.channel.recipient.username + " | " + message.content);
        }

        return;
    }

    // Don't do anything in any of these cases
    if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES") ||
        !message.channel.type === "text" || !message.guild || message.author.bot) { return; }

    const textMessage = message.content.toLowerCase();

    if (!textMessage.startsWith("+")) {

        if (textMessage.includes("hayl") || textMessage.includes("hayley")) {
            const channelID = "400779864191401984";
            const guildID = "356764662760472576";
            bot.guilds.get(guildID).channels.get(channelID).send(message.content + " [" + message.channel.name + ", " + message.author.username + "]" + " <@338163785082601473>");
        }

        if (serverSpecificMessages[message.guild.id]) {
            serverSpecificMessages[message.guild.id].forEach((value, index) => {
                if (serverSpecificMessages[message.guild.id][index].selector(message)) {
                    message.channel.send(serverSpecificMessages[message.guild.id][index].reply(message));
                }
            });
        }
    }
    bot.processMessage(message);
};
