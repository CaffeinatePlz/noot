const Discord = require("discord.js");
const logger = require('heroku-logger');
const bot = new Discord.Client({
   token: process.env.BOT_TOKEN,
   autorun: true
});
//const config = require("./config.json");
require("./functions.js")(bot);
bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();
bot.aliases = new Discord.Collection();
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
  bot.user.setGame(`on ${bot.guilds.size} servers | + `);
});

bot.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  bot.user.setGame(`on ${bot.guilds.size} servers`);
});

bot.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  bot.user.setGame(`on ${bot.guilds.size} servers`);
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

  if (command === ('dm')) {
    var userID = '258827398282346499';
    message.guild.members.get(userID).send('u lost the game ;) ');
    message.delete();
  }

if (command === ('invite')) {
    message.channel.send("https://discordapp.com/oauth2/authorize?client_id=438485530812874752&scope=bot&permissions=8");
  }
});

bot.login(process.env.BOT_TOKEN);
//bot.login(config.token);
