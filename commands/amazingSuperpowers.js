exports.run = (bot, message, args) => {
  const Discord = require("discord.js");
  const request = require('request-promise-native');
  const cheerio = require('cheerio');

  request.get('http://www.amazingsuperpowers.com/?randomcomic&nocache=1', (err, res, page) => {
    const $ = cheerio.load(page);
    message.channel.send({ embed: new Discord.RichEmbed()
      .setTitle(`AmazingSuperPowers (`+ $('.post-title a').text()+`)`)
      .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
      .setImage($("#comic-1 img").attr("src"))
      .setURL(res.request.uri.href)
    });
  });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['asp'],
	botPerms: [],
	memberPerms: []
};


exports.help = {
	name: 'AmazingSuperPowers',
	description: 'posts an AmazingSuperPowers comic',
	usage: '+AmazingSuperPowers'
};
