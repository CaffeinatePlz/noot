exports.run = (bot, message, args) => {
  const Discord = require("discord.js");
  const request = require('request-promise-native');
  const cheerio = require('cheerio');

  request.get('http://explosm.net/comics/random', (err, res, page) => {
    const $ = cheerio.load(page);
    message.channel.send({ embed: new Discord.RichEmbed()
      .setTitle(`Cyanide & Happiness (${res.request.uri.href.split("/")[4]})`)
      .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
      .setImage("https:" + $("#main-comic").attr("src"))
      .setURL(res.request.uri.href)
    });
  });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['cyanide'],
	botPerms: [],
	memberPerms: []
};


exports.help = {
	name: 'cah',
	description: 'posts a cyanide and happiness comic',
	usage: '+cah'
};
