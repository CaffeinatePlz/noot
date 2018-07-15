exports.run = (bot, message, args) => {
  var koalaFacts = [
    "When koalas are born, their bones are filled with air, so if they fall out of their parent’s upside down pouches, they float gently to the ground.\n\nNot to be confused with their drop bear cousins with bones filled with lead",
    "Did you know, in the year 254, there were massive koalas who would pull up trees like roots, and provide aboriginal people with wood for fires.",
    "The first koala appearance in newspapers was in 1952, when a koala broke into a bakery and ate over 3 dozen pastries before passing out.",
    "Koalas have been taught to play many instruments, from the kazoo to the simple drums.",
    "Koala fur is often used for oven mitts because they’re resistant to bushfires.",
    "Like Australia, koalas were made up by the British",
    "Did you know, there once used to be a koala olympics, where all koalas around the world competed for the chance to live in the biggest and best gum tree. However this was canceled after the first year when they realised that koalas only came from one country.",
    "Did you know, a group of koalas is called a parachute, because they like to hug each other while falling off trees, creating a parachute with their fur prior to landing softly.",
    "Did you know, koalas sleep so much because they steal the it from sleep-deprived HSC students for themselves",
    "When koalas get older, they make their children feed them leaves, just to make fun of the mother birds who spend hours each day finding food for their children.",
    "Koalas like to get inside air conditioning units which is why there are so few ACs in Australia.",
		"koalas were first hired by the aboriginals as tree house builders in 1325, and the service discontinued the following year due to insufficient sleep.",
		"Did you know, koalas used to be able to breathe out fire, but this feature was disabled due to excessive bushfires during mating season, when the koalas were showing off their firebreathing skills.",
		"Did you know, early koalas liked to hunt kangaroos, however they soon realised that their strong tails made them a formidable enemy. Ever since, they have passed down legends of the kangaroo slaying koalas, but have been too scared to try it themselves.",
  ];

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
