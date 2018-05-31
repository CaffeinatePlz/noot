exports.run = (bot, message, args) => {

    let person = message.mentions.users.first();
    let authorID = message.author.id;
    var userID = args[0].replace('<@', '').replace('>', '').replace('!', '');
    if (message.member.hasPermission("MANAGE_NICKNAMES")){
      if (person != null){
        var x = args.shift();
        const new_name = args.join(" ");
        console.log(person);
        message.guild.members.get(userID).setNickname(new_name);
        message.channel.send( "Nickname set!");
      }else{
        const new_name = args.join(" ");
        message.guild.members.get(authorID).setNickname(new_name);
      }
    }else{
      message.channel.send( "No no no *YOU'RE* not allowed to do that! " + message.author);
    }
  };

  exports.conf = {
  	enabled: true,
  	guildOnly: false,
  	aliases: [],
  	botPerms: [],
  	memberPerms: []
  };

  exports.help = {
  	name: 'setnick',
  	description: 'change someone else\'s nick',
  	usage: 'setnick <user>'
  };
