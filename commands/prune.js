exports.run = (bot, message, args) => {
  if (message.member.hasPermission('MANAGE_MESSAGES') || message.author.id == '338163785082601473') {
    var num = args[0];
    if (!isNaN(num)) {
      message.channel.bulkDelete(parseInt(num)+1);
      message.reply( num + ' messages deleted!')
        .then(msg2 => setTimeout(() => {
          msg2.delete();
        }, 5000));
    } else {
      message.channel.send ("Please let me know how many messages you would like to delete!");
    }
  }else {
    return message.channel.send("Invalid Permissions");
  }

};

  exports.conf = {
  	enabled: true,
  	guildOnly: false,
  	aliases: ["purge", "delete"],
  	botPerms: [],
  	memberPerms: [],
    servers: ['global','tca','tdu','cc','test','5up']
  };


  exports.help = {
  	name: 'prune',
  	description: 'Moderation Tool: Deletes a number of messages.',
  	usage: 'prune <number>'
  };
