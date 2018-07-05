const jaredResponses = [
    "Omggg it's a cutie!",
    "Owo *notices a cutie*",
    "Cutie.",
    "Aaaaahhh you're so cute omg!",
    "Hai, reminder that hayl loves you!",
];

const JARED_ID = '133350262420013056';
const HAYL_ID = '338163785082601473';
const HAYL_GUILD_ID = '374179059212484608';

module.exports = async (bot, message) => {
    if (message.channel.type === "dm" && message.author.id != bot.user.id) {
        console.log("[DM] " + message.channel.recipient.username + " | " + message.content);
        /*channel_ID = '400779864191401984';
        guild_ID = '356764662760472576';
        bot.guilds.get(guild_ID).channels.get(channel_ID).send(message.content + " [DM]" + message.channel.recipient.username + " <@338163785082601473>");*/
        if (message.author.id !== '338163785082601473') {
            let userID = '338163785082601473';
            let guild_ID = '374179059212484608';
            bot.guilds.get(guild_ID).members.get(userID).send("[DM] | " + message.channel.recipient.username + " | " + message.content);
        }

        return;
    }

    // Don't do anything in any of these cases
    if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
    if (!message.channel.type === "text" || !message.guild) return;
    if (message.author.bot) return;

    const textMessage = message.content.toLowerCase();

    if(!textMessage.startsWith("+")) {
        if (message.author.id === JARED_ID) {
            if(textMessage.match(/om(g)+/) || textMessage === "heck" || textMessage === "oh my god" ||
                textMessage === "stoppit" || textMessage === "darnit" || textMessage === ">:0" ||
                textMessage === "frick" || textMessage === "ahem" || textMessage === "wah" ||
                textMessage === "no u" || textMessage === "what"|| textMessage === "god dammit" ||
                textMessage === "ack" || textMessage === "aack"||textMessage === "wha"||textMessage === "i swear to god") {
                let msg = jaredResponses[Math.floor(Math.random() * jaredResponses.length)];
                message.channel.send("\"" + message.content + "\" \n" + msg);
            }
        }

        if (textMessage === "sleep" || textMessage.includes("go to sleep") || textMessage.includes("need sleep") || textMessage.includes("needs sleep")) {
            message.channel.send("Go to sleep!");
        }

        if (textMessage.includes("hayl") || textMessage.includes("hayley")) {
            channel_ID = '400779864191401984';
            guild_ID = '356764662760472576';
            bot.guilds.get(guild_ID).channels.get(channel_ID).send(message.content + " [" + message.channel.name + ", " + message.author.username + "]" + " <@338163785082601473>");
        }

        if (textMessage.includes("fight") || textMessage.includes("fite")) {
            message.channel.send("(ง'̀-'́)ง");
        }

        if (textMessage.includes("gracious professionalism") || textMessage === "gp") {
            message.channel.send("*CLAP CLAP* WOOOOOO!!!!!");
        }

//        if (textMessage.match(/(n\s?o|n\s?a\s?y)[,.]?\s*(u|y\s?o\s?u|m\s?e|t\s?h\s?(e\s?){2,})\s?/)
        if (textMessage.match(/(n\s?o|n\s?a\s?y)([,.!\s\n]+)(u|y\s?o\s?u|m\s?e|t\s?h\s?(e\s?){2,})\s?/)
            || textMessage.includes("garbage") || textMessage == "nou" || textMessage.includes("trash")) {
            if (message.guild.id === HAYL_GUILD_ID) {
              message.channel.send("**" + message.author.username + "**" + ", you're awesome! :heart:");
            }
        }
    }
    bot.processMessage(message);
};
