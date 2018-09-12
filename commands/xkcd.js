exports.run = (bot, message, args) => {
  const Discord = require("xkcd");
  let img = '';
  let title = '';
  let description = '';
  let author = '';

  if (!args[0]){
    xkcd(function (data) {
      try {
        message.channel.send({ embed: new Discord.RichEmbed()
            .setAuthor('XKCD')
            .setTitle(data.safe_title)
            .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
            .setImage(data.img)
            .setDescription(data.alt)
          });
      } catch (err) {
          msg.channel.send(err);
      }
    });
  } else if (!isNaN(args[0])){
    xkcd(532, function (data) {
      try {
        message.channel.send({ embed: new Discord.RichEmbed()
            .setAuthor('XKCD')
            .setTitle(data.safe_title)
            .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
            .setImage(data.img)
            .setDescription(data.alt)
          });
      } catch (err) {
          msg.channel.send(err);
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
