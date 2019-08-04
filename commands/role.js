exports.run = (bot, message, args) => {
    const Discord = require('discord.js');
    let command = args.shift();
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
        if (!command) {
            return message.channel.send('Please include a role to self assign using `+role give role_name`, ' +
                'or type `+role list` for a list of assignable roles!')
        } else if (command == 'list') {
            let str = "";
            for (let i=0; i<TDUroles.length; i++){
                str += `${TDUroles[i]} \n`
            };
            const listEmbed = new Discord.RichEmbed()
                .setTitle("Self Assignable Roles")
                .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
                .setDescription(str)
                .setFooter("Run +role give <role name> to self assign these roles!")
                .setTimestamp()
            return message.channel.send({embed: listEmbed});
        } else if (command == 'give'){
            if (message.member.roles.find(r => r.name == new_role)) {
                message.reply('You already have this role!');
            } else if (TDUroles.includes(new_role)) {
                message.member.addRole(role).then(() => {
                    message.channel.send("Role given!");
                }).catch(err => {
                    message.reply('I was unable to give the role.');
                });
            } else if (!new_role){
                message.reply('Please use `+role list` for a list of self assignable roles, ' +
                    '`+role give role_name` to receive a role and `+role remove role_name` to remove a role!');
            } else {
                message.reply('This role either does not exist or cannot be self assigned.')
            }
        } else if (command == 'remove') {
            if (!message.member.roles.find(r => r.name == new_role)) {
                message.reply('You do not have this role!');
            } else if (TDUroles.includes(new_role)) {
                message.member.removeRole(role).then(() => {
                    message.channel.send("Role removed!");
                }).catch(err => {
                    message.reply('I was unable to remove the role.');
                });
            } else if (!new_role){
                message.reply('Please use `+role list` for a list of self assignable roles, ' +
                    '`+role give role_name` to receive a role and `+role remove role_name` to remove a role!');
            } else {
                message.reply('This role either does not exist or cannot be self assigned.')
            }
        } else {
            message.reply('Invalid command. Please use `+role list` for a list of self assignable roles, ' +
                '`+role give role_name` to receive a role and `+role remove role_name` to remove a role!');
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
    name: 'role',
    description: 'Self assign a role',
    usage: 'role give/remove <role>'
};
