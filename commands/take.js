exports.run = (bot, message, args) => {
  if (message.author.id != '338163785082601473' )return;
  let member = message.mentions.members.first();
  var x = args.shift();
  const new_role = args.join(" ");
  let role = message.guild.roles.find("name", new_role);
  member.removeRole(role).catch(console.error);
  message.channel.send( "Role taken!");
};

  exports.conf = {
  	enabled: true,
  	guildOnly: false,
  	aliases: [],
  	botPerms: [],
  	memberPerms: []
  };

  exports.help = {
  	name: 'take',
  	description: 'take a role from someone',
  	usage: 'take <user> <role>'
  };
