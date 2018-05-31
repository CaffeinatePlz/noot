exports.run = (bot, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply( "No no no *YOU'RE* not allowed to do that! ");
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);

    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable)
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    member.ban(reason);
    //await member.ban(reason)
    //.catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  };

  exports.conf = {
  	enabled: true,
  	guildOnly: false,
  	aliases: [],
  	botPerms: [],
  	memberPerms: []
  };


  exports.help = {
  	name: 'ban',
  	description: 'swing the ban hammer',
  	usage: 'ban <member> <reason>'
  };
