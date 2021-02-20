const HAYL_ID = '338163785082601473';
const HAYL_GUILD_ID = '374179059212484608';

const Discord = require('discord.js');
var stringSimilarity = require('string-similarity');

module.exports = async (bot, message) => {

    if (message.channel.type === "dm" && message.author.id != bot.user.id) {
        console.log("[DM] " + message.channel.recipient.username + " | " + message.channel.recipient.id + " | " + message.content);
        
        if (message.author.id !== process.env.OWNER_ID) {
            await bot.guilds.fetch(process.env.TEST_GUILD_ID)
                .then(guild => guild.channels.fetch('811065043311263755')
                    .then(channel => channel.send("[DM] | " + message.channel.recipient.tag + " | " + message.channel.recipient.id + " | " + message.content)))
                .catch((err) => console.log("Error1: " + err));
        }
        return;
    }
    if (message.channel.type === "dm") return;
    // Don't do anything in any of these cases
    if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
    if (!message.channel.type === "text" || !message.guild) return;
    if (message.author.bot) return;

    const textMessage = message.content.toLowerCase();
    if(!textMessage.startsWith("+")) {

        if (textMessage.includes("hayl") || textMessage.includes("hayley")||textMessage.includes("caff") || textMessage.includes("fundy")) {
            await bot.guilds.fetch(process.env.TEST_GUILD_ID)
                .then(guild => guild.channels.cache.get(process.env.LOG_CHANNEL).send(message.content + " [" + message.channel.name + ", " + message.author.username + ", " + message.guild.name + "]" + " <@338163785082601473>"))
                .catch((err) => message.reply("Error1: " + err));
        }

      if (message.guild.id === HAYL_GUILD_ID) {
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

      }
    }
    bot.processMessage(message);
};



// //OCTANE MESSAGE FILTER
        // //if (message.guild.id == '356764662760472576'){ //testing
        // if (message.guild.id == '657434856413855784'){ //octane // TODO:
        //     const MAX_PINGS = 5;
        //     const SIMILARITY_THRESHHOLD = 0.8;
        //     const MAX_SPAM = 3;
        //     const SPAM_TIME = 10000; //ms

        //     //var log_cID = "750662588102082571"; //testing #logs //TODO
        //     var log_cID = "702343552650313748"; //octane #logs //TODO


        //     var spam = 0;
        //     var type = "";
        //     // spam ping
        //     var numPings = message.mentions.users.array().length + message.mentions.roles.array().length;
        //     if (numPings >= MAX_PINGS) {
        //         spam = 1;
        //         type = "Spam Pinging " + numPings + " users/roles";
        //         var logEmbed = new Discord.RichEmbed();
        //         logEmbed.setAuthor(bot.user.username,bot.user.avatarURL)
        //             .setTitle("Spam Detection: Muted author + Deleted the following message")
        //             .setDescription("Type: " + type)
        //             .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]);
        //         logEmbed.addField("USERID: " + message.author.id + " | " + message.author.tag + " | msg ID: " + message.id, textMessage);
        //         message.guild.channels.get(log_cID).send({embed: logEmbed});
        //         message.delete();
        //         message.guild.channels.get(log_cID).send("<@338163785082601473>, please review the above messages from user: " + message.author);
        //         let user = message.author;
        //         user.send("You have been muted in the Octane Discord for: " + type + ". Please contact a staff member if you believe this is a mistake!");
        //     }


        //     // spam detection

        //     let numSimilar = 1;
        //     message.channel.messages.fetch({ limit: 5 }).then(messages => {
        //         let arr = messages.array();
        //         for (let i = 1; i < arr.length; i++) {
        //             if(arr[i].author != message.author){
        //                 continue;
        //             };
        //             if(message.createdAt - arr[i].createdAt > SPAM_TIME) {
        //                 continue;
        //             }
        //             var similarity = stringSimilarity.compareTwoStrings(textMessage, arr[i].content.toLowerCase());

        //             if(similarity > SIMILARITY_THRESHHOLD){
        //                 numSimilar++;
        //             };
        //         }

        //         if (numSimilar >= MAX_SPAM){
        //             spam = 1;
        //             if (type != "") {
        //                 type += " | ";
        //             }
        //             type += "Message spam";
        //         }

        //         // log
        //         if (spam == 1) {
        //             if (message.member.roles.find(r => r.name.toLowerCase() == "muted")) {
        //                 return;
        //             }
        //             let role = message.guild.roles.find("name", "Muted");
        //             message.member.addRole(role);

        //             for (let i = 1; i < arr.length; i++) {
        //                 if(arr[i].author != message.author){
        //                     continue;
        //                 };
        //                 if(message.createdAt - arr[i].createdAt > SPAM_TIME) {
        //                     continue;
        //                 }

        //                 var logEmbed = new Discord.RichEmbed();
        //                 logEmbed.setAuthor(bot.user.username,bot.user.avatarURL)
        //                     .setTitle("Spam Detection: Muted author + Deleted the following message")
        //                     .setDescription("Type: " + type)
        //                     .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]);
        //                 logEmbed.addField("USERID: " + message.author.id + " | " + message.author.tag + " | msg ID: " + message.id, textMessage);
        //                 message.guild.channels.get(log_cID).send({embed: logEmbed});
        //                 arr[i].delete();
        //             }
        //             arr[0].delete();
        //             message.guild.channels.get(log_cID).send("<@338163785082601473> <@272198104608931840> <@668338373089558529> <@327987563430150144>, please review the above messages from user: " + message.author);
        //             let user = message.author;
        //             user.send("You have been muted in the Octane Discord for: " + type + ". Please contact a staff member if you believe this is a mistake!");
        //         }

        //     }).catch(console.error);


        // }



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

        // if (message.channel.id == "456362608702914560" || message.channel.id == "611844083190857748" ) {
        //     if ((textMessage.includes("late")||textMessage.includes("miss")) && (textMessage.includes("bus")||textMessage.includes("train"))){
        //         message.channel.send("*psssst* you should try to use tripview more");
        //     }

        // }

        // TDU
        // if (message.channel.id == "456362608702914560" || message.channel.id == "611844083190857748" ) {
        //     console.log("1");
        //     message.channel.messages.fetch({ limit: 5 }).then(messages => {
        //         let arr = messages.array();
        //         for (let i = 0; i < arr.length; i++) {
        //             if(arr[i].content.includes(message.author.id)){
        //                 return;
        //             };
        //         }
        //         var aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Sydney"});
        //         aestTime = new Date(aestTime);
        //         if (aestTime.getDay() != 2 && aestTime.getDay() != 3 && aestTime.getDay() != 5) {
        //             message.reply(`This channel should only be used on Tuesdays, Wednesdays or Fridays to let us know any last minute changes. \nPlease fill in this form to let us know about any absences. ${process.env.TDU_FORM}`);
        //         }
        //     }).catch(console.error);

        // }