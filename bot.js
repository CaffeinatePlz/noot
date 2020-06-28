const Discord = require("discord.js");
const bot = new Discord.Client({
   token: process.env.BOT_TOKEN,
   tba_token: process.env.TBA_TOKEN,
   autorun: true
});
require("./functions.js")(bot);
bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();
bot.aliases = new Discord.Collection();

var schedule = require('node-schedule');
let rule = new schedule.RecurrenceRule();
rule.tz = 'Australia/Sydney';
rule.second = 0;
rule.minute = 0;
rule.hour = 22;
rule.dayOfWeek = [0, 1, 4];

schedule.scheduleJob(rule, function () {
    bot.guilds.get('605683682493333507').channels.get('611844083190857748')
        .send(`10pm reminder: This channel should be used to let us know any last minute attendance changes on the day of the meeting. ` +
            `\nPlease fill in this form to let us know about any absences, late arrivals, or early leaves. ${process.env.TDU_FORM}`)
});


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
  bot.user.setActivity(`on ${bot.guilds.size} servers | + `);
});

bot.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  bot.user.setActivity(`on ${bot.guilds.size} servers | +`);
});

bot.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  bot.user.setActivity(`on ${bot.guilds.size} servers | +`);
});

bot.on('guildMemberAdd', member => {
    if (member.guild.id == '605683682493333507') {
        member.guild.channels.get('606837991033405460').send("Welcome, <@" + member.user.id + ">! " +
            "Please read the above instructions to gain access to the rest of the server.");
    } else if (member.guild.id == '606986694905823233') {
        member.addRole(member.guild.roles.find(role => role.name === "Alliance Partners"));
        member.guild.channels.get('657718621057056768').send("Welcome, <@" + member.user.id + ">! " +
            "Please set your nickname with `+nick name teamnumber`, for example `+nick Anna 9999`, " +
            "to help everyone easily identify you. \n" +
            "__To access program specific channels:__\n" +
            "- Type in `+role list`\n" +
            "- Pick a role that you want to add, and type `+role add rolename` where rolename is the role you would like.\n" +
            "If there is anything you need help with, ping <@338163785082601473> and she'll be around ASAP.");
    } else if (member.guild.id == '655240399136358420'){
        member.guild.channels.get('655241972411531274').send("Welcome, <@" + member.user.id + ">! " +
            "Please set your nickname with `+nick name teamnumber`, for example `+nick Anna 9999`, " +
            "to help everyone easily identify you. If you are a call center staff, your role will be assigned soon.\n" +
            "__To start  a private chat with our call center staff:__\n" +
            "- Type in `+start teamnumber`, for example `+start 9999`\n" +
            "If there is anything you need help with, ping Hayley @ CaffeinatePlz#2727 and she'll be around ASAP.");
    }
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf("+") !== 0) return;
  const args = message.content.slice(1).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
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
        catch (err){ message.channel.sendMessage('```js\n'+err+"```");}
    }



  if (command === ('listservers')) {
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

  if (command === ('boop')) {
    if (message.author.id == '57506893358170112'||message.author.id == '338163785082601473'){
      var boop = message.mentions.users.array()[0];
      if (boop != null){
        message.channel.send( boop + ", u have been booped by paramallamacorn!");
      } else {
        message.channel.send("please mention someone");
      }
    }else{
      message.reply(", you dont have permission to do this!");
    }
  }

  if (command === ('dm')) {
    if (message.author.id != '338163785082601473' ) return message.reply("Are you Hayl? I don't think so. Shhhh child.");
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
  if (command === ('git')||command === ('github')||command === ('gh')) {
    message.channel.send("https://github.com/CaffeinatePlz/noot");
  }

  if (command === ('invite')) {
    message.channel.send("https://discordapp.com/oauth2/authorize?client_id=438485530812874752&scope=bot&permissions=8");
  }

  if (command === ('music')) {
    message.channel.send("https://open.spotify.com/user/12153980750/playlist/63vJJJTobWXaZtYWsrrpu6?si=PE5Da_I3TG2OCG9PU3xaPw");
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
      message.channel.sendMessage("**Input:**```js\n"+code+"```**Eval:**```js\n"+ev+"```")
    } catch(err) {
      message.channel.sendMessage('```js\n'+err+"```")
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

            var listEmbed = new Discord.RichEmbed();
            //listEmbed.setTitle(`${day} Absences`)
            listEmbed.setTitle(`Absences`)
                .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
                .setDescription(names);
            msg.channel.send({embed: listEmbed})
            console.log(listEmbed);
        } else {
            console.log('No data found.');
        }
    });
}




bot.login(process.env.BOT_TOKEN);
//bot.login(config.token);
