exports.run = async(bot, message, args) => {
	if (!args[0]) {
		return message.reply("Empty command. The correct usage is: \`kick <member> <reason>\`");
	}
	if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Invalid Permissions");

	var member = message.guild.member(message.mentions.users.first()) || await message.channel.guild.members.fetch(args[0]).catch((err) => message.reply("Error: " + err));
	if (typeof member.user === "undefined" || !member.user) {
		return message.reply("Invalid member");
	}

	var reason = args.slice(1).join(' ');

	if(!reason) reason = "No reason provided";
	member.kick({reason: reason});
	message.channel.send(`${member.user.tag} has been kicked by ${message.author.tag} for: ${reason}`);

};

  exports.conf = {
  	enabled: true,
  	guildOnly: false,
  	aliases: [],
  	botPerms: [],
  	memberPerms: [],
    servers: ['global','tca','tdu','cc','test','5up']
  };


  exports.help = {
  	name: 'kick',
    description: 'Moderation Tool: Kicks a server member',
  	usage: 'kick <member> <reason>'
  };
