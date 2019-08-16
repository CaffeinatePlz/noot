exports.run = (bot, message, args) => {
    const Discord = require('discord.js');
    let command = args.shift();
    //let new_role = args.join(" ").toLowerCase();
    //let role = message.guild.roles.find(r => r.name.toLowerCase() == new_role);
    let roleList = args.join(" ").toLowerCase().split(', ');

    const TDU_ID = '605683682493333507';

    const TDUroles = [
        "Mechanical",
        "Electrical",
        "Software",
        "Strategy",
        "Outreach",
        "Social",
        "Elec Training",
        "Software Training",
        "Tool Training",
        "Demo Bot",
        "CAD Training",
    ];

    if (message.guild.id === TDU_ID){
        if (!command) {
            return message.channel.send('Please include a role to self assign using `+role add role_name`, ' +
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
                .setFooter("Run +role add role_name, role_name1, ... to self assign these roles!")
                .setTimestamp()
            return message.channel.send({embed: listEmbed});

        } else if (command == 'add'){
            let alreadyHad = 0;
            let alreadyHadNames = "";
            let added = 0;
            let addedNames = "";
            let couldnt = 0;
            let couldntNames ="";

            for (let i=0; i<roleList.length; i++) {
                let role = message.guild.roles.find(r => r.name.toLowerCase() == roleList[i]);
                if (TDUroles.includes(role.name)) {
                    if (!role) {
                        couldnt += 1;
                        couldntNames += `${roleList[i]}\n`
                    } else if (role.comparePositionTo(message.guild.me.highestRole) < 0) {
                        if (message.member.roles.find(r => r.name == role.name)) {
                            alreadyHad += 1;
                            alreadyHadNames += `${roleList[i]}\n`
                        } else {
                            message.member.addRole(role)
                            added += 1;
                            addedNames += `${roleList[i]}\n`
                        }
                    } else {
                        couldnt += 1;
                        couldntNames += `${roleList[i]}\n`
                    }
                } else {
                    couldnt += 1;
                    couldntNames += `${roleList[i]}\n`
                }
            }
            if (added == 0){
                message.reply('Please use `+role list` for a list of self assignable roles, ' +
                    '`+role add role_name, role_name1, ... ` to receive a role ' +
                    'and `+role remove role_name, role_name1, ... ` to remove a role!');
            }

            const addEmbed = new Discord.RichEmbed()
                .setTitle("Roles")
                .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
                .setTimestamp();

            if (added > 0) addEmbed.addField(`Added ${added} roles!`, addedNames);
            if (alreadyHad >0) addEmbed.addField(`You already had ${alreadyHad} roles!`, alreadyHadNames);
            if (couldnt > 0) addEmbed.addField(`Couldn't add ${couldnt} roles!`, couldntNames +
                '\nPlease type `+role list` for a list of assignable roles!');

            message.channel.send({embed: addEmbed});

        } else if (command == 'remove') {

            let didntHave = 0;
            let didntHaveNames  = "";
            let removed  = 0;
            let removedNames = "";
            let couldnt = 0;
            let couldntNames ="";

            for (let i=0; i<roleList.length; i++) {
                let role = message.guild.roles.find(r => r.name.toLowerCase() == roleList[i]);
                if (TDUroles.includes(role.name)) {
                    if (!role) {
                        couldnt += 1;
                        couldntNames += `${roleList[i]}\n`
                    } else if (role.comparePositionTo(message.guild.me.highestRole) < 0) {
                        if (!message.member.roles.find(r => r.name == role.name)) {
                            didntHave += 1;
                            didntHaveNames += `${roleList[i]}\n`
                        } else {
                            message.member.removeRole(role)
                            removed += 1;
                            removedNames += `${roleList[i]}\n`
                        }
                    } else {
                        couldnt += 1;
                        couldntNames += `${roleList[i]}\n`
                    }
                } else {
                    couldnt += 1;
                    couldntNames += `${roleList[i]}\n`
                }
            }
            if (removed == 0){
                message.reply('Please use `+role list` for a list of self assignable roles, ' +
                    '`+role add role_name, role_name1, ... ` to receive a role ' +
                    'and `+role remove role_name, role_name1, ... ` to remove a role!');
            }

            const removeEmbed = new Discord.RichEmbed()
                .setTitle("Roles")
                .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
                .setTimestamp();

            if (removed > 0) removeEmbed.addField(`Removed ${removed} roles!`, removedNames);
            if (didntHave >0) removeEmbed.addField(`You didn't have ${didntHave} roles!`, didntHaveNames);
            if (couldnt > 0) removeEmbed.addField(`Couldn't remove ${couldnt} roles!`, couldntNames +
                '\nPlease type `+role list` for a list of assignable roles!');

            message.channel.send({embed: removeEmbed});


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
    memberPerms: []
};

exports.help = {
    name: 'role',
    description: 'Self assign a role',
    usage: 'role add/remove <role>'
};
