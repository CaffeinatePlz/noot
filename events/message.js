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
                textMessage === "stoppit" || textMessage === "darnit") {
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

        if (textMessage.match(/(no|nay)([,.])?(\s)*(u|you|me|th(e)+)/)
            || textMessage.includes("garbage") || textMessage.includes("trash")) {
            if (message.guild.id === HAYL_GUILD_ID) {
                if (message.author.id === HAYL_ID) {
                    message.channel.send("~~ew it's hayl~~");
                } else {
                    message.channel.send(message.author + " , you're awesome! :heart:");
                }
            }
        }
    }
    bot.processMessage(message);
};
