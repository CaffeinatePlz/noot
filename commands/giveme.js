exports.run = (bot, message, args) => {
    const Discord = require('discord.js');

    let member = message.author;
    let new_role = args.join(" ");
    let role = message.guild.roles.find("name", new_role);

    const TDU_ID = '605683682493333507';

    const TDUroles = [
        "Mechanical",
        "Electrical",
        "Software",
        "Strategy",
        "Scouting",
        "Drivetrain",
    ];


    if (message.guild.id === TDU_ID){
        if (!args[0]) {
            return message.channel.send('Please include a role to self assign, or type `+giveme list` for a list of assignable roles!')
        } else if (args[0] == 'list') {
            let str = "";
            for (let i=0; i<TDUroles.length; i++){
                str += `${TDUroles[i]} \n`
            };
            const listEmbed = new Discord.RichEmbed()
                .setTitle("Self Assignable Roles")
                .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
                .setDescription(str)
                .setFooter("Run +giveme <role name> to self assign any of these roles!")
                .setTimestamp()
            return message.channel.send({embed: listEmbed});
        } else if (TDUroles.includes(new_role)) {
            member.addRole(role).then(() => {
                message.channel.send("Role given!");
            }).catch(err => {
                message.reply('I was unable to give the role');
            });
        } else {
            message.reply('This role does not exist!');
        }
    } else {
        return message.reply( "This server does not have any self-assignable roles right now.");
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
  	name: 'giveme',
  	description: 'Self assign a role',
  	usage: 'giveme <role>'
  };
