exports.run = (bot, message, args) => {
  const Discord = require('discord.js');
  const xkcd = require("xkcd");
  let img = '';
  let title = '';
  let description = '';
  let author = '';

  if (!args[0]){
    xkcd(function (data) {

      try {
        message.channel.send({ embed: new Discord.RichEmbed()
          .setAuthor('XKCD #' + data.num)
          .setTitle(data.safe_title)
          .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
          .setImage(data.img)
          .setDescription(data.alt)
        });
      } catch (err) {
        message.channel.send(err);
      }
    });
  } else if (!isNaN(args[0])){
    xkcd(args[0], function (data) {
      try {
        message.channel.send({ embed: new Discord.RichEmbed()
          .setAuthor('XKCD #' + data.num)
          .setTitle(data.safe_title)
          .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
          .setImage(data.img)
          .setDescription(data.alt)
        });
      } catch (err) {
        message.channel.send(err);
      }
    });
  } else {
    message.reply("Please use +xkcd <number>");
  }

};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	botPerms: [],
	memberPerms: []
};


exports.help = {
	name: 'xkcd',
	description: 'posts a xkcd comic',
	usage: '+xkcd'
};
