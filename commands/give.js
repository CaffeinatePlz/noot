exports.run = async(bot, message, args) => {
	if (!args[0]) {
		return message.reply("empty command");
	}
	if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Invalid Permissions");
	
	var member = message.guild.member(message.mentions.users.first()) || await message.channel.guild.members.fetch(args[0]).catch((err) => message.reply("Error: " + err));
	
	if (typeof member.user === "undefined" || !member.user) {
		return message.reply("Invalid member");
	}		

	var x = args.shift();
	const new_role = args.join(" ");
	if(member.roles.cache.find(role => role.name === new_role)) return message.channel.send("This user already has the role!");

	let role = message.guild.roles.cache.find(role => role.name == new_role);

	member.roles.add(role).then(() => {
		message.channel.send( "Role given!");
	}).catch(err => {
		message.reply('I was unable to give the role');
	});
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
  	name: 'give',
  	description: 'Moderation Tool: Gives a role to a server member',
  	usage: 'give <user> <role>'
  };









//   let member = message.mentions.members.first();
//   var x = args.shift();
//   const new_role = args.join(" ");
//   let role = message.guild.roles.find("name", new_role);

//   if(!message.member.hasPermission("MANAGE_ROLES")
//     && !(message.author.id == '57506893358170112' && new_role == "Paramallamaccomplice")
//     && !(message.author.id == '392492179748290561' && new_role == "kboobooboo bestie")
//     && !(message.author.id == '281970530037268480' && new_role == "birb appreciators")
// )
//     return message.reply( "No no no *YOU'RE* not allowed to do that! ");

//   member.addRole(role).then(() => {
//     message.channel.send( "Role given!");
//   }).catch(err => {
//     message.reply('I was unable to give the role');
//   });