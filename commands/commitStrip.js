exports.run = (bot, message, args) => {
  const Discord = require("discord.js");
  const request = require('request-promise-native');
  const cheerio = require('cheerio');

  request.get('http://www.commitstrip.com/?random=1', (err, res, page) => {
    const $ = cheerio.load(page);
    message.channel.send({ embed: new Discord.RichEmbed()
      .setTitle(`CommitStrip (`+ $('.entry-title').text()+`)`)
      .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
      .setImage($(".entry-content img").attr("src"))
      .setURL(res.request.uri.href)
    });
  });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['cs'],
	botPerms: [],
	memberPerms: []
};


exports.help = {
	name: 'CommitStrip',
	description: 'posts an CommitStrip comic',
	usage: '+CommitStrip'
};
