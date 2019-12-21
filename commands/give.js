exports.run = (bot, message, args) => {
  let member = message.mentions.members.first();
  var x = args.shift();
  const new_role = args.join(" ");
  let role = message.guild.roles.find("name", new_role);

  if(!message.member.hasPermission("MANAGE_ROLES")
    && !(message.author.id == '57506893358170112' && new_role == "Paramallamaccomplice")
    && !(message.author.id == '392492179748290561' && new_role == "kboobooboo bestie")
    && !(message.author.id == '281970530037268480' && new_role == "birb appreciators")
)
    return message.reply( "No no no *YOU'RE* not allowed to do that! ");

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
  	memberPerms: [],
    servers: ['global','tca','tdu','cc','test']
  };

  exports.help = {
  	name: 'give',
  	description: 'give someone a role',
  	usage: 'give <user> <role>'
  };
