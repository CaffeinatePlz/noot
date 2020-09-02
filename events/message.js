const HAYL_ID = '338163785082601473';
const HAYL_GUILD_ID = '374179059212484608';
const DREW_GUILD_ID = '479881805374160934';
const HAWAII_GUILD_ID = '446777348042391553';
const INCOMING_CATEGORY = '655241137212096553';
const ARCHIVED_CATEGORY = '656077269260828682';
const HOST_ROLE = '655240553931341824';
const ONLINE_ROLE = '656078383595126794';

const noot_love = [
  "you're awesome! :heart:",
  "hey you, you're pretty cool!",
  "I :clap: appreciate :clap: you!"
]

const Discord = require('discord.js');
var stringSimilarity = require('string-similarity');

module.exports = async (bot, message) => {

    if (message.channel.type === "dm" && message.author.id != bot.user.id) {
        console.log("[DM] " + message.channel.recipient.username + " | " + message.channel.recipient.id + " | " + message.content);
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

        if (textMessage.includes("hayl") || textMessage.includes("hayley")||textMessage.includes("caff") ) {
            channel_ID = '400779864191401984';
            guild_ID = '356764662760472576';
            bot.guilds.get(guild_ID).channels.get(channel_ID)
                .send(message.content + " [" + message.channel.name + ", " + message.author.username + ", " + message.guild.name + "]" + " <@338163785082601473>");
        }

        if (textMessage.includes("mama") || textMessage.includes("sphynx")||textMessage.includes("marie") ) {
            channel_ID = '646251544609685505';
            guild_ID = '597934849747320852';
            bot.guilds.get(guild_ID).channels.get(channel_ID)
                .send(message.content + " [" + message.channel.name + ", " + message.author.username + ", " + message.guild.name + "]" + " <@564771150090207232>");
        }

        //OCTANE MESSAGE FILTER
        if (message.guild.id == '356764662760472576'){ //testing
        //if (message.guild.id == '655240399136358420'){ //octane

            const MAX_PINGS = 5;
            const SIMILARITY_THRESHHOLD = 0.8;
            const MAX_SPAM = 3;
            const SPAM_TIME = 5000; //ms
            // const FILTERED_CONTENT = [ //TODO:
            //     "",
            //     ""
            // ];
            var log_cID = "750662588102082571"; //#logs //TODO
            var spam = 0;
            var type = "";
            // spam ping
            var numPings = message.mentions.users.array().length + message.mentions.roles.array().length;
            if (numPings >= MAX_PINGS) {
                spam = 1;
                type = "Spam Pinging " + numPings + " users/roles";
            }

            // filter words
            // for(let i = 0; i < FILTERED_CONTENT.length; i++) {
            //     if (message.includes(FILTERED_CONTENT[i])) {
            //         spam = 1;
            //         if (type != "") {
            //             type += " | ";
            //         }
            //         type += "Tripped word filter";
            //         break;
            //     }
            // }

            // spam detection

            let numSimilar = 1;
            message.channel.fetchMessages({ limit: 10 }).then(messages => {
                let arr = messages.array();
                for (let i = 1; i < arr.length; i++) {
                    if(arr[i].author != message.author){
                        continue;
                    };
                    if(message.createdAt - arr[i].createdAt > SPAM_TIME) {
                        break;
                    }
                    var similarity = stringSimilarity.compareTwoStrings(textMessage, arr[i].content.toLowerCase());
                    if(similarity > SIMILARITY_THRESHHOLD){
                        numSimilar++;
                    };
                }
            }).catch(console.error);

            if (numSimilar >= MAX_SPAM){
                spam = 1;
                if (type != "") {
                    type += " | ";
                }
                type += "Message spam";
            }

            // log
            if (spam == 1) {
                let role = message.guild.roles.find("name", "Muted");
                message.member.addRole(role);
                message.delete();
                var logEmbed = new Discord.RichEmbed();
                logEmbed.setAuthor(bot.user.username,bot.user.avatarURL)
                    .setTitle("Spam Detection: Muted author + Deleted the following message")
                    .setDescription("Type: " + type)
                    .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]);
                logEmbed.addField("From: " + message.author.id + " | " + message.author.tag, textMessage);
                message.guild.channels.get(log_cID).send("<@338163785082601473>" + {embed: logEmbed});
            }

        }



            //CALL CENTRE
        // if (message.guild.id == '655240399136358420' && message.channel.parentID == ARCHIVED_CATEGORY){
        //     let channel = message.channel;
        //     channel.setParent(INCOMING_CATEGORY).then( channel => {
        //             channel.overwritePermissions(message.author, {
        //                 VIEW_CHANNEL: true
        //             })
        //                 .then( channel => {
        //                     channel.send("<@&" + ONLINE_ROLE + "> , a call has been started by <@" + message.author.id + ">");
        //                 })
        //         }
        //     );
        // }

        if (message.channel.id == "456362608702914560" || message.channel.id == "611844083190857748" ) {
            if ((textMessage.includes("late")||textMessage.includes("miss")) && (textMessage.includes("bus")||textMessage.includes("train"))){
                message.channel.send("*psssst* you should try to use tripview more");
            }

        }

        // TDU
        if (message.channel.id == "456362608702914560" || message.channel.id == "611844083190857748" ) {
            message.channel.fetchMessages({ limit: 5 }).then(messages => {
                let arr = messages.array();
                for (let i = 0; i < arr.length; i++) {
                    if(arr[i].content.includes(message.author.id)){
                        return;
                    };
                }
                var aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Sydney"});
                aestTime = new Date(aestTime);
                if (aestTime.getDay() != 1 && aestTime.getDay() != 2 && aestTime.getDay() != 5) {
                    message.reply(`This channel should only be used on Mondays, Tuesdays or Fridays to let us know any last minute changes. \nPlease fill in this form to let us know about any absences. ${process.env.TDU_FORM}`);
                }
            }).catch(console.error);

        }

      if (message.guild.id === HAYL_GUILD_ID || message.guild.id === DREW_GUILD_ID || message.guild.id === HAWAII_GUILD_ID) {
        if (textMessage === "sleep" || textMessage.includes("go to sleep") || textMessage.includes("need sleep") || textMessage.includes("needs sleep")) {
            message.channel.send("Go to sleep!");
        }

        if (textMessage.includes("fight") || textMessage.includes("fite")) {
            message.channel.send("(ง'̀-'́)ง");
        }

        if ( textMessage === "oof") {
            message.react('384494179683794944');
        }
        if (textMessage.includes("noot noot") ) {
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
