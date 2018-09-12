exports.run = (bot, message, args) => {
  const Discord = require("discord.js");
  const request = require('request-promise-native');
  const cheerio = require('cheerio');

  let img = '';
  let link = '';
  let title = '';
  let description = '';
  let author = '';

  /*const body = request.get('http://explosm.net/comics/random');
  const $ = cheerio.load(body);

  img = $('#main-comic').attr('src').replace(/^\/\//, 'http://');
  link = $('#permalink').attr('value');
  author = 'Cyanide and Happiness';*/
  const body = request.get('http://www.commitstrip.com/?random=1');
        const $ = cheerio.load(body);
        img = $('.entry-content img').attr('src');
        link = $('link[rel="canonical"]').attr('href');
        title = $('.entry-title').text();
        author = 'CommitStrip';

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
