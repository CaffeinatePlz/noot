exports.run = (bot, message, args) => {

    var member = message.guild.member(message.mentions.users.first()) || await message.channel.guild.members.fetch(args[0]).catch((err) => message.reply("Error: " + err));
        
    if (message.member.hasPermission("MANAGE_NICKNAMES")){
        if (member != null){
            var x = args.shift();
            const new_name = args.join(" ");
            member.setNickname(new_name);
            message.channel.send( "Nickname set!");
        }else{
            message.channel.send("Please mention a member of the server!");
        }
    }else{
        message.channel.send( "Only users with the MANAGE_NICKNAMES permission are allowed to use this command. " + message.author);
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
  	name: 'setnick',
  	description: 'Moderation Tool: Changes a server member\'s nickname',
  	usage: 'setnick <user>'
};
