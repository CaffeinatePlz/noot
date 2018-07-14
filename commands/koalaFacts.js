exports.run = (bot, message, args) => {
	const MarkovChain = require('markovchain');
	const fs = require('fs');
	const koalafacts = new MarkovChain(fs.readFileSync('./commands/koalafacts.txt', 'utf8'));
	message.channel.send(`${koalafacts.start("Did you know, ").end(" ").process()}`);
};


/*exports.run = (bot, message, args) => {
  var koalaFacts = [
    "When koalas are born, their bones are filled with air, so if they fall out of their parent’s upside down pouches, they float gently to the ground.\n\nNot to be confused with their drop bear cousins with bones filled with lead",
    "Did you know, in the year 254, there were massive koalas who would pull up trees like roots, and provide aboriginal people with wood for fires.",
    "The first koala appearance in newspapers was in 1952, when a koala broke into a bakery and ate over 3 dozen pastries before passing out.",
    "Koalas have been taught to play many instruments, from the kazoo to the simple drums.",
    "Koala fur is often used for oven mitts because they’re resistant to bushfires.",
    "Like Australia, koalas were made up by the British",
    "Did you know, koalas sleep so much because they steal the it from sleep-deprived HSC students for themselves",
    "When koalas get older, they make their children feed them leaves, just to make fun of the mother birds who spend hours each day finding food for their children.",
    "Koalas like to get inside air conditioning units which is why there are so few ACs in Australia.","koalas were first hired by the aboriginals as tree house builders in 1325, and the service discontinued the following year due to insufficient sleep.",
  ];

  var msg = koalaFacts[Math.floor(Math.random() * koalaFacts.length)];
  message.channel.send( "\""+ msg + "\"");
};
*/

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['koalafacts', 'koalafunfact'],
	botPerms: [],
	memberPerms: []
};

exports.help = {
	name: 'koalafact',
	description: 'If you go up to certain FRC Team 3132 members and ask for koala fun facts, this could be something you get as a response.',
	usage: 'koalafact'
};
