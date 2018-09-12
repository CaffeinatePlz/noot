/*exports.run = (bot, message, args) => {
  const Discord = require("discord.js");
  const request = require('request-promise-native');
  const cheerio = require('cheerio');

  let img = '';
  let title = '';
  let description = '';
  let author = '';

//  var x = Math.floor(Math.random() * 5035);
  const body = request.get('http://explosm.net/comics/random');
  const $ = cheerio.load(body);
  img = 'https:' + $('.off-canvas-wrap','#main-comic').attr('src');
  author = 'Cyanide and Happiness';

  message.channel.send({ embed: new Discord.RichEmbed()
      .setAuthor(author)
      .setTitle(title)
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
*/
