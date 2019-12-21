exports.run = (bot, message, args) => {
  var koalaFacts = [
    "When koalas are born, their bones are filled with air, so if they fall out of their parent’s upside down pouches, they float gently to the ground.\n\nNot to be confused with their drop bear cousins with bones filled with lead",
    "Did you know, in the year 254, there were massive koalas who would pull up trees like roots, and provide aboriginal people with wood for fires.",
    "The first koala appearance in newspapers was in 1952, when a koala broke into a bakery and ate over 3 dozen pastries before passing out.",
    "Koalas have been taught to play many instruments, from the kazoo to the simple drums.",
    "Koala fur is often used for oven mitts because they’re resistant to bushfires.",
    "Like Australia, koalas were made up by the British",
    "One power cube is designed to fit exactly two koalas, with no additional space remaining. This allows for easy transport of koala's between various destinations",
    "There once used to be a koala olympics, where all koalas around the world competed for the chance to live in the biggest and best gum tree. However this was canceled after the first year when they realised that koalas only came from one country.",
    "A group of koalas is called a parachute, because they like to hug each other while falling off trees, creating a parachute with their fur prior to landing softly.",
    "Koalas sleep so much because they steal the it from sleep-deprived HSC students for themselves",
    "When koalas get older, they make their children feed them leaves, just to make fun of the mother birds who spend hours each day finding food for their children.",
    "Koalas like to get inside air conditioning units which is why there are so few ACs in Australia.",
    "koalas were first hired by the aboriginals as tree house builders in 1325, and the service discontinued the following year due to insufficient sleep.",
    "Koalas used to be able to breathe out fire, but this feature was disabled due to excessive bushfires during mating season, when the koalas were showing off their firebreathing skills.",
    "Early koalas liked to hunt kangaroos, however they soon realised that their strong tails made them a formidable enemy. Ever since, they have passed down legends of the kangaroo slaying koalas, but have been too scared to try it themselves.",
    "Koalas used to be amazing at running, until the British penal colony invaded their land. Ever since then, koalas have learned from this introduced and invasive species to procrastinate, which is why they now spend up to 22 hours a day sleeping in trees. Koalas are often known as the gods of procrastination, due to their natural habits involving only sleeping and eating.",
    "Koalas have been known to invade school grounds after bushfires, in search of school tables to find gum with the lack of accessible gum trees.",
    "All the giant spiders in Australia have only one natural predator: the koala. But the koalas just can't be bothered to eat the darn things, and thus, koalas are the reason there are so many spiders in Australia.",
    "Koalas are thought to have acquired their 20h sleep schedule by examining bored and tired prisoners during Australia's penal prison period.",
    "Koalas are hard to convince to care about anything, but if you manage to draw their ire, they're amongst nature's most savage predators. The last known aggravated koala killed 5 men in a rage before falling asleep.",
    "Koalas jump from tree to tree in order to avoid the ground. This is due to the fact that they may fall asleep on the ground, causing some unsuspecting tourist to believe it is a rock and stand on it.",
    "Koalas navigated roads on the left side so that they could easily high five a koala that they was going the other way. This precedence created by the Koalas is the reason why Australians drive on the left today.",
  ];

  var msg = koalaFacts[Math.floor(Math.random() * koalaFacts.length)];
  message.channel.send( "\""+ msg + "\"");
};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['koalafacts', 'koalafunfact', 'kf'],
	botPerms: [],
	memberPerms: [],
    servers: ['global','tdu','test']
};

exports.help = {
	name: 'koalafact',
	description: 'If you go up to certain FRC Team 3132 members and ask for koala fun facts, this could be something you get as a response.',
	usage: 'koalafact'
};
