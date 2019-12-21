exports.run = (bot, message, args) => {
  if (message.author.id == '338163785082601473' ){
    var channel_ID = args[0].replace('<#', '').replace('>', '').replace('!', '');
    var x = args.shift();
    const sayMessage = args.join(" ");
    message.delete();
    message.guild.channels.get(channel_ID).send(sayMessage);
      /*const sayMessage = args.join(" ");
      message.delete();
      message.channel.send(sayMessage);*/
  } else {
    message.channel.send( "No no no *YOU'RE* not allowed to do that! " + message.author);
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
  	name: 'say',
  	description: 'say something',
  	usage: 'say <message>'
  };



/*
if(command === "say"){
  let channel = message.mentions.channels.first();
  if (message.author.id != '338163785082601473' ){
    message.channel.send( "No no no *YOU'RE* not allowed to do that! " + message.author);
    return;
  }
  if (!args[0]){
    message.channel.send("Do you have something to say? ");
  }
  if (args[0] = channel){
    var channel_ID = args[0].replace('<#', '').replace('>', '').replace('!', '');
    var x = args.shift();
    const sayMessage = args.join(" ");
    message.delete();
    message.guild.channels.get(channel_ID).send(sayMessage)
  } else {
    const sayMessage = args.join(" ");
    message.delete();
    message.channel.send(sayMessage);
  }
}
*/
