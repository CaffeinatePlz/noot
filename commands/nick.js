exports.run = (bot, message, args) => {
  let person = message.mentions.users.first();
  let authorID = message.author.id;
  const new_name = args.join(" ");
  if (person != null){
    message.channel.send( "No no no *YOU'RE* not allowed to do that! " + message.author);
  }else{
    message.guild.members.get(authorID).setNickname(new_name);
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
  	name: 'nick',
  	description: 'set your nickname',
  	usage: 'nick <new nick>'
  };
