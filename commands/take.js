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
  	memberPerms: [],
    servers: ['global','tca','tdu','cc','test']
  };

  exports.help = {
  	name: 'take',
  	description: 'Moderation Tool: Takes a role from a server member',
  	usage: 'take <user> <role>'
  };
