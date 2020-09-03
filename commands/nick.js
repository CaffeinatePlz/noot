exports.run = (bot, message, args) => {
      let person = message.mentions.users.first();
      let authorID = message.author.id;
      const new_name = args.join(" ");
      if (person != null || !message.author.hasPermission("CHANGE_NICKNAME")){
            message.channel.send( "You do not have permissions to do this " + message.author);
      }else{
            message.guild.members.get(authorID).setNickname(new_name);
            message.channel.send( "Nickname set!");
      }
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
  	name: 'nick',
  	description: 'Set your nickname',
  	usage: 'nick <new nick>'
  };
