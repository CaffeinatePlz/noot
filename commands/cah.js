exports.run = (bot, message, args) => {
  let link = "http://explosm.net/rcg";
	let res = await fetch(link);
	message.channel.send(
    "(" + link + ")",
    { file: res.text.split('<meta property="og:image" content="').pop().split('">').shift()}
  );
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
