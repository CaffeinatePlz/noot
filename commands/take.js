exports.run = async(bot, message, args) => {
	if (!args[0]) {
		return message.reply("empty command");
	}
	if(!message.member.hasPermission("MANAGE_ROLES"))
		return message.channel.send("You do not have permissions to give this role.");

	var member = message.guild.member(message.mentions.users.first()) || await message.channel.guild.members.fetch(args[0]).catch((err) => message.reply("Error: " + err));
	
	if (typeof member.user === "undefined" || !member.user) {
		return message.channel.send("Invalid member");
	}		

	var x = args.shift();
	const new_role = args.join(" ");
	if(!member.roles.cache.find(role => role.name === new_role)) return message.channel.send("This user doesn't have the role!");

	let role = message.guild.roles.cache.find(role => role.name == new_role);

	member.roles.remove(role).then(() => {
		message.channel.send( "Role removed!");
	}).catch(err => {
		message.channel.send('I was unable to remove the role');
	});

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
  	name: 'take',
  	description: 'Moderation Tool: Takes a role from a server member',
  	usage: 'take <user> <role>'
  };
