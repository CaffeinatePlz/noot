exports.run = (bot, message, args) => {
  const Discord = require("discord.js");
  const request = require('request-promise-native');
  const cheerio = require('cheerio');

  let img = '';
  let link = '';
  let title = '';
  let description = '';
  let author = '';

  const body = await request.get('http://www.amazingsuperpowers.com/?randomcomic&nocache=1');
        const $ = cheerio.load(body);
        img = $('#comic-1 img').attr('src');
        link = $('.post-title a').attr('href');
        title = $('.post-title a').text();
        description = $('.entry').text();
        author = 'AmazingSuperPowers';
        
  message.channel.send({ embed: new Discord.RichEmbed()
      .setAuthor(author)
      .setTitle(title)
      .setURL(link)
      .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
      .setImage(img)
      .setDescription(description)
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
