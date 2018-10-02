exports.run = (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES"))
    return message.reply( "No no no *YOU'RE* not allowed to do that! ");
  let member = message.mentions.members.first();
  var x = args.shift();
  const new_role = args.join(" ");
  let role = message.guild.roles.find("name", new_role);
  member.addRole(role).then(() => {
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
  	memberPerms: []
  };

  exports.help = {
  	name: 'give',
  	description: 'give someone a role',
  	usage: 'give <user> <role>'
  };
