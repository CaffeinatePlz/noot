exports.run = (bot, message, args) => {
    const Discord = require('discord.js');
    const { get } = require("node-fetch");

    try {
        get('https://aws.random.cat/meow').then(res => {
            const embed = new Discord.RichEmbed()
                .setImage(res.body.file)
            return message.channel.send({embed});
        });
    } catch(err) {
        return message.channel.send(error.stack);
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
    name: 'cat',
    description: 'posts a random cat',
    usage: 'cat'
};


