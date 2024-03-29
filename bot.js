const Discord = require("discord.js");
const bot = new Discord.Client({
    disableMentions: 'everyone',
    token: process.env.DISCORD_TOKEN,
    tba_token: process.env.TBA_TOKEN,
    ws: { intents: Discord.Intents.ALL},
    partials: [ 'MESSAGE', 'USER', 'REACTION','CHANNEL' ],
    autorun: true
});
require('dotenv').config();

require("./functions.js")(bot);
bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();
bot.aliases = new Discord.Collection();

/*
var schedule = require('node-schedule');
let rule = new schedule.RecurrenceRule();
rule.tz = 'Australia/Sydney';
rule.second = 0;
rule.minute = 0;
rule.hour = 22;
rule.dayOfWeek = [1, 2, 4, 5];

schedule.scheduleJob(rule, function () {
    var guild = bot.guilds.cache.get('605683682493333507');
    guild.channels.cache.get('611844083190857748')
        .send(`10pm reminder: This channel should be used to let us know any last minute attendance changes on the day of the meeting. ` +
            `\nPlease fill in this form to let us know about any absences, late arrivals, or early leaves. ${process.env.TDU_FORM}`)
});

let mentorNotice = new schedule.RecurrenceRule();
mentorNotice.tz = 'Australia/Sydney';
mentorNotice.second = 0;
mentorNotice.minute = 0;
mentorNotice.hour = 8;
mentorNotice.dayOfWeek = [4];

schedule.scheduleJob(mentorNotice, function () {
    var guild = bot.guilds.cache.get('605683682493333507');
    guild.channels.cache.get('605687904983056384')
        .send(`<@&605687041228800030> There will be a mentor meeting tomorrow.` +
            `\nPlease put any agenda items in this document. ${process.env.TDU_MENTOR_DOC}`)
});

let mentorNotice2 = new schedule.RecurrenceRule();
mentorNotice2.tz = 'Australia/Sydney';
mentorNotice2.second = 0;
mentorNotice2.minute = 0;
mentorNotice2.hour = 8;
mentorNotice2.dayOfWeek = [5];

schedule.scheduleJob(mentorNotice2, function () {
    var guild = bot.guilds.cache.get('605683682493333507');
    guild.channels.cache.get('605687904983056384')
        .send(`<@&605687041228800030> There will be a mentor meeting today.` +
            `\nPlease ensure that you have read the agenda. ${process.env.TDU_MENTOR_DOC}`)
});
*/

const {google} = require('googleapis');
const client = new google.auth.JWT(
    'noot-846@noot-252512.iam.gserviceaccount.com',
    null,
    process.env.GS_PRIV_KEY,
    ['https://www.googleapis.com/auth/spreadsheets']
);
var names = "None";

const readdir = require('fs').readdir;

readdir('./commands/', (err, files) => {
    if (err) throw err;
    console.log(`Loading ${files.length} commands!`);
    files.forEach(f => {
        try {
            let commandFile = require(`./commands/${f}`);
            //console.log(`${files.help.name} command is loading`);
            bot.commands.set(commandFile.help.name, commandFile);
            commandFile.conf.aliases.forEach(alias => {
                bot.aliases.set(alias, commandFile.help.name);
            });
        } catch (e) {
            console.log(`Unable to load command ${f}: ${e}`);
        }
    });
    console.log(`Commands loaded!`);
});

readdir('./events/', (err, files) => {
    console.log(`Loading ${files.length} events!`);
	files.forEach(file => {
		const eventName = file.split(".")[0];
		const eventFunction = require(`./events/${file}`);
		bot.on(eventName, eventFunction.bind(null, bot));
	});
    console.log(`Events loaded!`);
});

bot.on("ready", () => {
    // This event will run if the bot starts, and logs in, successfully.
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
    bot.user.setActivity(`+help | CaffeinatePlz#2727`);
    const SERVER_RULE_ID = '795757925745950761';
    const AU_RULE_ID = '757664518938689649';
    const MC_RULE_ID = '806337843546161172';
    const PARTY_RULE_ID = '800129679730147410';
    var guild = bot.guilds.cache.get(process.env.FIVEUP_GUILD_ID);
    guild.channels.cache.get('771189259134566430').messages.fetch(SERVER_RULE_ID).catch(err => console.log(err));
    guild.channels.cache.get('757655193742737638').messages.fetch(AU_RULE_ID).catch(err => console.log(err));
    guild.channels.cache.get('777595865472696330').messages.fetch(MC_RULE_ID).catch(err => console.log(err));
    guild.channels.cache.get('800126912328237107').messages.fetch(PARTY_RULE_ID).catch(err => console.log(err));
});

bot.on('guildMemberAdd', member => {
    if (member.guild.id == '605683682493333507') {
        member.guild.channels.cache.get('606837991033405460').send("Welcome, <@" + member.user.id + ">! " +
            "Please read the above instructions to gain access to the rest of the server.");
    }
});

bot.on("messageReactionAdd", async (messageReaction, user) => {
    var message = messageReaction.message;

    if (message.guild.id != process.env.FIVEUP_GUILD_ID) return;
    const SERVER_RULE_ID = '795757925745950761';
    const AU_RULE_ID = '757664518938689649';
    const MC_RULE_ID = '806337843546161172';
    const PARTY_RULE_ID = '800129679730147410';
    
    let member = message.guild.members.cache.get(user.id);

    if (message.id == SERVER_RULE_ID) {        
        let role = message.guild.roles.cache.find(role => role.name == "Member");
        if(member.roles.cache.find(role => role.name === "Member")) return;
        member.roles.add(role).catch(err => {
            console.log(err)
        });
    } else if (message.id == AU_RULE_ID) {
        let role = message.guild.roles.cache.find(role => role.name == "Among");
        if(member.roles.cache.find(role => role.name === "Among")) return;
        member.roles.add(role).catch(err => {
            console.log(err)
        });
    } else if (message.id == MC_RULE_ID) {
        let role = message.guild.roles.cache.find(role => role.name == "Minecraft");
        if(member.roles.cache.find(role => role.name === "Minecraft")) return;
        member.roles.add(role).catch(err => {
            console.log(err)
        });
    } else if (message.id == PARTY_RULE_ID) {
        let role = message.guild.roles.cache.find(role => role.name == "Party Games");
        if(member.roles.cache.find(role => role.name === "Party Games")) return;
        member.roles.add(role).catch(err => {
            console.log(err)
        });
    }
})

bot.on("message", async message => {
    if (message.channel.type === "dm") return;
    if (message.guild.id != process.env.FIVEUP_GUILD_ID) return;
    if (message.channel.id != '800134128196124672') return;
    if (!message.mentions) return;
    if (!message.mentions.users.first()) return;

    message.react('👍');
    message.react('👎');
})

bot.on("message", async message => {
    if (message.channel.type === "dm") return;
    if (message.guild.id != process.env.FIVEUP_GUILD_ID) return;
    if (message.channel.id != '847351549335306240') return;

    message.react('👍');
    message.react('👎');
})

// Art Gallery
bot.on("message", async message => {
    if (message.channel.type === "dm") return;
    if (message.guild.id != process.env.FIVEUP_GUILD_ID) return;
    if (message.channel.id != '800875067415855154') return;
    // if message doesn't have a link or attachment, delete 
    if (message.attachments.size == 0) {

        try {
            message.author.send("Your recent message has been deleted. The 5up server art gallery is only used for posting artworks, not for chatting. If you are posting a piece, make sure to have the art posted as an attachment, not using links.")
        } catch(err) {
            console.log(err)
        }
        message.delete();
    }
})

bot.on("message", async message => {
    if (message.channel.type === "dm") return;

    const textMessage = message.content.toLowerCase();
    var logGuild = process.env.FIVEUP_GUILD_ID;
    var logChannel = process.env.FIVEUP_LOG_CHANNEL_ID;
    if (message.guild.id != logGuild) return;
    if (message.channel.parentID == '774475186212569129') return;
    var logChannel = await bot.guilds.fetch(logGuild).then(guild => guild.channels.cache.get(logChannel)).catch(err => console.log(err));
    if (!logChannel) return;
    if (!logChannel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
    if (message.author.bot) return;
    var dlt = new Discord.MessageEmbed()
      .setTitle('Message Sent')
    if (message.member.nickname == null) {
      dlt.addField('User', `${message.author.tag} | ${message.author.id}`, true)
    } else {
      dlt.addField('User', `${message.member.nickname} (${message.author.tag}) | ${message.author.id}`, true);
    };
    dlt.addField('Channel', message.channel.name, true)
    if (message.attachments.size == 0) {
        return;
        //dlt.addField('Message', `${message}`);
    } else {
      pictures = message.attachments.array();
      if (message.content != "") {
        dlt.addField('Message', `${message.content}`)
      }
      for (i=0; i<pictures.length; i++) {
		//dlt.addField(`Image ${i}`, pictures[i].url)
		dlt.attachFiles(pictures[i]);
      }
    }
    dlt.setFooter(`Message ID: ${message.id}`);
    dlt.setTimestamp()
      .setColor('#E53935')
	logChannel.send({
      embed: dlt
    });
})

bot.on("messageDelete", async message => {
    if (message.channel.type === "dm") return;

  var logGuild = process.env.FIVEUP_GUILD_ID;
  var logChannel = process.env.FIVEUP_LOG_CHANNEL_ID;

    if (message.guild.id != logGuild) return;
    if (message.channel.parentID == '774475186212569129') return;
    var logChannel = await bot.guilds.fetch(logGuild).then(guild => guild.channels.cache.get(logChannel)).catch(err => console.log(err));
    if (!logChannel) return;
    if (!logChannel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
    if (message.author.bot) return;
    var dlt = new Discord.MessageEmbed()
      .setTitle('Message Deleted')
    if (message.member.nickname == null) {
      dlt.addField('User', `${message.author.username}`, true)
    } else {
      dlt.addField('User', `${message.member.nickname} (${message.author.username})`, true);
    };
    dlt.addField('Channel', message.channel.name, true)
    if (message.attachments.size == 0) {
        return;
        //dlt.addField('Message', `${message}`);
    } else {
      pictures = message.attachments.array();
      if (message.content != "") {
        dlt.addField('Message', `${message.content}`)
      }
      for (i=0; i<pictures.length; i++) {
		//dlt.addField(`Image ${i}`, pictures[i].url)
		dlt.attachFiles(pictures[i]);
      }
    }
    dlt.setFooter(`Message ID: ${message.id}`);
    dlt.setTimestamp()
      .setColor('#E53935')
	logChannel.send({
      embed: dlt
    });

});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf("+") !== 0) return;
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ws.ping)}ms`);
    }
    if (command === "nick") {
        var member = await message.channel.guild.members.fetch(message.author.id).catch((err) => message.reply("Error: " + err));
        var set = 1;
        await member.setNickname(args[0]).catch(err => {set = 0; message.channel.send("I was unable to add the nickname")});
        if (set == 1) message.channel.send("Nickname set!");
    }

    if (command === ('attendance')||command === ('absence')){
        if (message.guild.id != '605683682493333507' && message.guild.id != '356764662760472576' ) return;
        if (!args[0]||!args[0].toLowerCase().match(/(mon(day)*|tue(s)*(day)*)|(wed(nes)*(day)*|thu(r)*(day)*)|(fri(day)*|sat(ur)*(day)*)|(sun(day)*)/))
            return message.channel.send("Please use +attendance mon/tue/wed/thu/fri/sat/sun");
        let col;

        if (args[0].toLowerCase().includes('mon')){
            col = 1;
        } else if (args[0].toLowerCase().includes('tue')){
            col = 2;
        } else if (args[0].toLowerCase().includes('wed')){
            col = 3;
        } else if (args[0].toLowerCase().includes('thu')){
            col = 4;
        } else if (args[0].toLowerCase().includes('fri')){
            col = 5;
        } else if (args[0].toLowerCase().includes('sat')){
            col = 6;
        } else {
            col = 0;
        }

        try{ gsrun(client,col,message);}
        catch (err){ message.channel.send('```js\n'+err+"```");}
    }



    if (command === ('listservers')) {
        if (message.guild.id == "657434856413855784") return;

        var servers = "";
        var no = 1;
        var guilds = bot.guilds.array();
        for (var i = 0; i < guilds.length; i++) {
            var guildname = guilds[i].name.replace('@', '@ ');
            servers += `${no}. ${guildname}\n`;
            no++;
        }
        message.channel.send(servers);
    }

    if (command === ('dm')) {
        if (message.author.id != '338163785082601473' ) return message.reply(", you do not have permission to do this.");
        let person = message.mentions.users.first();
        if (person != null){
            var userID = args[0].replace('<@', '').replace('>', '').replace('!', '');
            var x = args.shift();
            const dm_message = args.join(" ");
            message.guild.members.get(userID).send(dm_message);
            message.delete();
        }else{
            var userID1 = args[0];
            args.shift();
            const sayMessage = args.join(" ");
            message.guild.members.get(userID1).send(sayMessage);
            message.delete();
        }
    }

    if (command === ('invite')) {
        if (message.guild.id == "657434856413855784") return;
        message.channel.send(`https://discordapp.com/oauth2/authorize?client_id=${process.env.CLIENT_ID}&scope=bot&permissions=8`);
    }

    if(command === ('say')){
        if (message.author.id == '338163785082601473' ){
            var channel_ID = args[0].replace('<#', '').replace('>', '').replace('!', '');
            var x = args.shift();
            const sayMessage = args.join(" ");
            message.delete();
            message.guild.channels.get(channel_ID).send(sayMessage);
        } else {
            message.channel.send( "No no no *YOU'RE* not allowed to do that! " + message.author);
        }
    }

  if (command === ('get_id')) {
    var userID = args[0].replace('<@', '').replace('>', '').replace('!', '');
    message.channel.send(userID);
  }

  if (command === ('eval')) {
    if (message.author.id != '338163785082601473' && message.author.id != '326313419613536256')
      return message.reply( "No no no *YOU'RE* not allowed to do that! ");
    try {
      let code = args.join(" ");
      let ev = require('util').inspect(eval(code));
      if (ev.length > 1950) {
         ev = ev.substr(0, 1950);
      }
      message.channel.send("**Input:**```js\n"+code+"```**Eval:**```js\n"+ev+"```")
    } catch(err) {
      message.channel.send('```js\n'+err+"```")
    }
   }
  });



async function gsrun(cl,col,msg){
    const gs = google.sheets({version:"v4", auth: cl});
    gs.spreadsheets.values.get({
        auth: cl,
        spreadsheetId: process.env.TDU_SHEET,
        range: `Nootable`,
    }, (err, response) => {
        if (err) {
            console.log('The API returned an error: ' + err);
            return;
        }
        let rows = response.data.values;
        if (rows.length) {
            names = "";
            rows.forEach(row => {
                if(row[col]) {
                    names += `${row[col]}\n`;
                }
            })
            if(!names){
                names = "No absences!"
            }
            console.log(names);

            var listEmbed = new Discord.MessageEmbed();
            //listEmbed.setTitle(`${day} Absences`)
            listEmbed.setTitle(`Absences`)
                .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
                .setDescription(names);
            msg.channel.send({embed: listEmbed});
        } else {
            console.log('No data found.');
        }
    });
}

bot.login(process.env.DISCORD_TOKEN);
