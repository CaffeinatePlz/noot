exports.run = (bot, message, args) => {
    const Discord = require('discord.js');
    let command = args.shift();
    let new_role = args.join(" ").toLowerCase();
    let role = message.guild.roles.find(r => r.name.toLowerCase() == new_role);

    const TDU_ID = '605683682493333507';
    const TCA_GUILD_ID = "606986694905823233";

    const TDUroles = [
        "social",
        "outreach"
    ];

    const TCAroles = [
        "call center",
        "hear for you",
        "help hubs",
        "resources",
        "service stations",
        "tag teams",
    ];

    if (message.guild.id === TDU_ID||message.guild.id === TCA_GUILD_ID){
        if (!command) {
            return message.channel.send('Please include a role to self assign using `+role add role_name`, ' +
                'or type `+role list` for a list of assignable roles!')
        } else if (command == 'list') {
            let str = "";
            if (message.guild.id == TDU_ID){
                for (let i=0; i<TDUroles.length; i++){
                    let rolename = message.guild.roles.find(r => r.name.toLowerCase() == TDUroles[i])
                    str += `${rolename.name} \n`
                };
            } else if (message.guild.id== TCA_GUILD_ID){
                for (let i=0; i<TCAroles.length; i++){
                    let rolename = message.guild.roles.find(r => r.name.toLowerCase() == TCAroles[i])
                    str += `${rolename.name} \n`
                };
            }
            const listEmbed = new Discord.RichEmbed()
                .setTitle("Self Assignable Roles")
                .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
                .setDescription(str)
                .setFooter("Run +role add role_name to self assign these roles!")
                .setTimestamp()
            return message.channel.send({embed: listEmbed});
        } else if (command == 'add' || command == 'give'){
            if (message.member.roles.find(r => r.name.toLowerCase() == new_role)) {
                message.reply('You already have this role!');
            } else if ((message.guild.id == TDU_ID && TDUroles.includes(new_role))
                || (message.guild.id == TCA_GUILD_ID && TCAroles.includes(new_role))) {
                message.member.addRole(role).then(() => {
                    message.channel.send("Role added!");
                }).catch(err => {
                    message.reply('I was unable to add the role.');
                });
            } else if (!new_role){
                message.reply('Please use `+role list` for a list of self assignable roles, ' +
                    '`+role add role_name` to receive a role and `+role remove role_name` to remove a role!');
            } else {
                message.reply('This role either does not exist or cannot be self assigned.')
            }
        } else if (command == 'remove') {
            if (!message.member.roles.find(r => r.name.toLowerCase() == new_role)) {
                message.reply('You do not have this role!');
            } else if ((message.guild.id == TDU_ID && TDUroles.includes(new_role))
                || (message.guild.id == TCA_GUILD_ID && TCAroles.includes(new_role))) {
                message.member.removeRole(role).then(() => {
                    message.channel.send("Role removed!");
                }).catch(err => {
                    message.reply('I was unable to remove the role.');
                });
            } else if (!new_role){
                message.reply('Please use `+role list` for a list of self assignable roles, ' +
                    '`+role add role_name` to receive a role and `+role remove role_name` to remove a role!');
            } else {
                message.reply('This role either does not exist or cannot be self assigned.')
            }
        } else {
            message.reply('Invalid command. Please use `+role list` for a list of self assignable roles, ' +
                '`+role add role_name` to receive a role and `+role remove role_name` to remove a role!');
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
    memberPerms: [],
    servers: ['tca','tdu','test']
};

exports.help = {
    name: 'role',
    description: 'Self assign a role',
    usage: 'role add/remove <role>'
};
