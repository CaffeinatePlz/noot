exports.run = async (bot, message, args) => {

	if (!args[0]) {
		return message.reply("Empty command. The correct usage is: \`ban <member> <reason>\`");
	}
	if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")

	var member = message.guild.member(message.mentions.users.first()) || await message.channel.guild.members.fetch(args[0]).catch((err) => message.reply("Error: " + err));
	if (typeof member.user === "undefined" || !member.user) {
		return message.reply("Invalid member");
	}
	if (member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")

	var reason = args.slice(1).join(' ');

	if(!reason) reason = "No reason provided";
	member.ban({reason: reason});
	message.channel.send(`${member.user.tag} has been banned by ${message.author.tag} for: ${reason}`);
	
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
	name: 'ban',
	description: 'Moderation Tool: Bans a server member',
	usage: 'ban <member> <reason>'
};







	// User.ban({reason: banReason})

	// if(!message.channel.permissionsFor(bot.user).has("BAN_MEMBERS"))
    // 	return message.reply( "You do not have permissions to ban members. Please contact a server administrator if you believe this is an issue.");
	
	// var userid = args[0];
	// if (!userid) return message.reply("Please mention a valid member of this server");
	// if (userid.startsWith("<@")){
	// 	userid = userid.replace(/[<@!>]/g, '');
	// }
	// let member = message.channel.guild.members.fetch(userid);
	// if(!member)
	// 	return message.reply("Please mention a valid member of this server");
	// // if(!member.bannable)
	// // 	return message.reply(`I cannot ban this user! Do they have a higher role? Do I have ban permissions?`);
	// var reason = args.slice(1).join(' ');
	// if(!reason) reason = "No reason provided";
	// member.ban({ days: 0, reason: reason});
	// message.channel.send(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);



  	// if(!message.author.hasPermission("BAN_MEMBERS"))
    // 	return message.reply( "No no no *YOU'RE* not allowed to do that! ");
  	// let member = message.mentions.members.first() || message.guild.members.get(args[0]);

	// if(!member)
	// 	return message.reply("Please mention a valid member of this server");
	// if(!member.kickable)
	// 	return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
	// let reason = args.slice(1).join(' ');
	// if(!reason) reason = "No reason provided";
	// member.ban(reason);
	// message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);