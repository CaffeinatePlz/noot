exports.run = (bot, message, args) => {
    const Discord = require('discord.js');
    const request = require('request');

        request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let emb = new Discord.RichEmbed()
                    .setImage(body)
                    .setColor("#00ff00")
                    .setTitle("Random Cat")

                message.channel.send(emb);
            }
        });

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


