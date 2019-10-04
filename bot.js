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


    if (command === ('attendance')){
        if (message.guild.id != '605683682493333507' && message.guild.id != '356764662760472576' ) return;
        if (!args[0]||!args[0].toLowerCase().match(/(fri(day)*|tue(s)*(day)*)/))
            return message.channel.send("Please use +attendance tue/fri");
        let meetingDay;

        if (args[0].toLowerCase().includes('fri')){ meetingDay = "Fri"; }
        else { meetingDay = "Tue"; }

        try{ gsrun(client,meetingDay,message);}
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

  if (command === ('get_id')) {
    var userID = args[0].replace('<@', '').replace('>', '').replace('!', '');
    message.channel.send(userID);
  }

  if (command === ('full53nd')) {
      var str = "Send it? You don't know what it means? Well, let me tell you a little story. Think of the 'send' as the package. We're sending that package. Where? Doesn't matter. It's about the send, not the destination. Now, let's begin. Let's say you order a package off of Amazon™, but it never makes it past the website. That right there? That's a no send. No sender. Not even sent. Now you apply it to the Cheesy Poofs. Let's say we start a match, and the FMS data is sent out. But, the robot doesn't move. The Poofs don't pass the auto line, and they don't collect their five points. Bam. No send. Not a single aspect of the autonomous was sent. Anywhere.\n\n" +
          "Half send? Well, let's say you order that package off of Amazon™. This time, it makes it past the website and your package leaves the warehouse; but, it's otherwise lost, stolen, or destroyed on its way to your house. Half send. That's a half sender. It probably got halfway there, but wasn't fully sent. Let's look back at the Poofs' auton. Now, the match starts, and Lockdown© moves. But, alas, its elevator hits the scale and the robot tips over, or only two of the four cubes successfully get placed. Bam, half send. That's a half sender. Half of those power cubes were sent.\n\n" +
          "Fully send, though? Well, let's, again, say you order that same package off of Amazon™. This time around, the package arrives all in one piece, no damage. You pick it up, sign for it, and use its contents. Now that, my friend, is a full send. Back to the auton though. Now the Poofs pickup those four power cubes and place all four of them on the scale. They now own that scale. Bam, full send. Those four cubes? Fully sent. You could say that those first fifteen seconds were a full send.\n\n" +
          "But, you go 53-0? Now, that's not a full send, that's a next level of send. That, my good friend, is a FULL 53ND.\n\nThis is the art of the send, and let me ask you: are you silly?\n\n";

      message.channel.send(str);
  }

  if (command === ('eval')) {
    if (message.author.id != '338163785082601473')
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



async function gsrun(cl,day,msg){
    const gs = google.sheets({version:"v4", auth: cl});
    gs.spreadsheets.values.get({
        auth: cl,
        spreadsheetId: process.env.TDU_SHEET,
        range: `Overview ${day}`,
    }, (err, response) => {
        if (err) {
            console.log('The API returned an error: ' + err);
            return;
        }
        let rows = response.data.values;
        if (rows.length) {
            let col;
            if (day == "Tue"){
                col = 3;
            } else {
                col = 2;
            }
            names = "";
            rows.forEach(row => {
                if(row[col].includes("Absent")){
                    //console.log(`${row[0]}, ${row[col]}`);
                    names += `${row[0]}\n`;
                }
            })
            if(!names){
                names = "No absences!"
            }
            console.log(names);

            var listEmbed = new Discord.RichEmbed();
            listEmbed.setTitle(`${day} Absences`)
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
