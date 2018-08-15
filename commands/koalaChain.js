exports.run = (bot, message, args) => {
	const MarkovChain = require('markovchain');
	const fs = require('fs');
	const koalafacts = new MarkovChain(fs.readFileSync('../data/koalafacts.txt', 'utf8'));
	message.channel.send(`${koalafacts.start("Koalas").end(" ").process()}`);
};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['koalachains', 'kc'],
	botPerms: [],
	memberPerms: []
};

exports.help = {
	name: 'koalachain',
	description: 'A Markov Chain version of +koalafacts!',
	usage: 'koalachain'
};
