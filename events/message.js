const HAYL_ID = '338163785082601473';
const HAYL_GUILD_ID = '374179059212484608';



const noot_love = [
  "you're awesome! :heart:",
  "hey you, you're pretty cool!",
  "I :clap: appreciate :clap: you!"
]

const nick_appreciation = [
  "Did someone say \"Nick Hammes\"? *THE ONE AND ONLY* NICK HAMMES? That dude is awesome.",
  "Hey I hear you're talking about a 10/10 inspiring person and I would just like to say, I absolutely approve. Good job, kid.",
  "I :clap: appreciate :clap: Nick!",
  "Have you read this? If not you should. <https://docs.google.com/document/d/1XrremT6_RUHpCG0cMn0-ttmh6ZWlAVDEdUs1jX5wwtM/edit?usp=sharing>",
  "Hi Nick is great. All in favour say aye.",
  "*le gasp* omg Nick is great!",
  "Nick and I have gone on some crazy adventures around the world together, and he was the one who brought me home after I got lost, so daaaaamn I love the dude so much and you should too!",
]

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

        if (textMessage.includes("hayl") || textMessage.includes("hayley")) {
            channel_ID = '400779864191401984';
            guild_ID = '356764662760472576';
            bot.guilds.get(guild_ID).channels.get(channel_ID).send(message.content + " [" + message.channel.name + ", " + message.author.username + "]" + " <@338163785082601473>");
        }

      if (message.guild.id === HAYL_GUILD_ID) {
        if (textMessage === "sleep" || textMessage.includes("go to sleep") || textMessage.includes("need sleep") || textMessage.includes("needs sleep")) {
            message.channel.send("Go to sleep!");
        }

        if (textMessage.includes("fight") || textMessage.includes("fite")) {
            message.channel.send("(ง'̀-'́)ง");
        }

        if (textMessage.includes("gracious professionalism") || textMessage === "gp") {
            message.channel.send("*CLAP CLAP* WOOOOOO!!!!!");
        }
        if ( textMessage === "oof") {
            message.react('384494179683794944');
        }
        if (textMessage.includes("noot") ) {
            message.channel.send("Noot noot?");
        }

        if (textMessage.match(/(n\s?o+|n\s?a\s?y+|n\s?o\s?p\s?e)([,.!*\s\n]+)(u|y\s?o\s?u|m\s?e|t\s?h\s?(e\s?){2,})\s?/)
            || textMessage.includes("garbage") || textMessage == "nou" || textMessage == ":nou:" || textMessage.includes("trash")) {
            let msg = noot_love[Math.floor(Math.random() * noot_love.length)];
            message.channel.send("**" + message.author.username + "**, " + msg);
        }

        if (textMessage.includes("nick hammes")){
          let msg = nick_appreciation[Math.floor(Math.random() * nick_appreciation.length)];
          message.channel.send(msg);
        }
      }
    }
    bot.processMessage(message);
};
