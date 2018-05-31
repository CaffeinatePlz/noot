exports.run = (bot, message, args) => {
  var responses = [
    "GO TO SLEEP! ",
    "IT'S TIME TO SLEEP! ",
    "HAYLEY WILL HUNT YOU DOWN IF YOU DON'T SLEEP, ",
    "Please sleep? ",
  ];

  var sleeper = message.mentions.users.array()[0];
  var msg = responses[Math.floor(Math.random() * responses.length)];
  if (sleeper != null){
    message.channel.send( msg + sleeper + "\nhttps://i.imgur.com/6tHfvIM.jpg");
  } else {
    message.channel.send("please mention someone");
  }
};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['slep', 'gosleep'],
	botPerms: [],
	memberPerms: []
};


exports.help = {
	name: 'sleep',
	description: 'Everyone needs some sleep.',
	usage: 'sleep <member>'
};
