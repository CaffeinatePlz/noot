exports.run = (bot, message, args) => {
  var koalaFacts = require('./data/koalafacts.json');

  var msg = koalaFacts[Math.floor(Math.random() * koalaFacts.length)];
  message.channel.send( "\""+ msg + "\"");
};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['koalafacts', 'koalafunfact', 'kf'],
	botPerms: [],
	memberPerms: []
};

exports.help = {
	name: 'koalafact',
	description: 'If you go up to certain FRC Team 3132 members and ask for koala fun facts, this could be something you get as a response.',
	usage: 'koalafact'
};
