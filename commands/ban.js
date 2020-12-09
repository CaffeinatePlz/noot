exports.run = (bot, message, args) => {

	if(!msg.channel.permissionsFor(bot.user).hasPermission("BAN_MEMBERS"))
    	return message.reply( "You do not have permissions to ban members. Please contact a server administrator if you believe this is an issue.");
	
	let userid = args[0];
	if(userid.startsWith("<@")){
		userid = userid.substr(2,suffix.length-3);
	}
	let member = message.channel.server.members.get("id",userid);
	if(!member)
		return message.reply("Please mention a valid member of this server");
	if(!member.bannable)
		return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
	let reason = args.slice(1).join(' ');
	if(!reason) reason = "No reason provided";
	member.ban(reason);
	message.channel.send(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);



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
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	botPerms: [],
	memberPerms: [],
	servers: ['global','tca','tdu','cc','test']
};


exports.help = {
	name: 'ban',
	description: 'Moderation Tool: Bans a server member',
	usage: 'ban <member> <reason>'
};
