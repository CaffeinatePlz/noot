// exports.run = (bot, message, args) => {
//     if (message.guild.id == "657434856413855784") return;
//     const Discord = require("discord.js");
//     const request = require('request-promise-native');
//     const cheerio = require('cheerio');

//     request.get('https://random.cat/', (err, res, page) => {
//         const $ = cheerio.load(page);
//         message.channel.send({ embed: new Discord.RichEmbed()
//                 .setTitle(`Cat`)
//                 .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
//                 .setImage($(" img").attr("src"))
//                 .setURL(res.request.uri.href)
//         });
//     });
// };

// exports.conf = {
//     enabled: true,
//     guildOnly: false,
//     aliases: [],
//     botPerms: [],
//     memberPerms: [],
//     servers: ['tdu','test']
// };


// exports.help = {
//     name: 'cat',
//     description: 'posts a random cat',
//     usage: 'cat'
// };
