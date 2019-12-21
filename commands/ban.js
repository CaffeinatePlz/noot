exports.run = (bot, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply( "No no no *YOU'RE* not allowed to do that! ");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);

    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable)
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    member.ban(reason);
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
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
