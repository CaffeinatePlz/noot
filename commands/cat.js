exports.run = (bot, message, args) => {
    const Discord = require("discord.js");
    const request = require('request-promise-native');
    const cheerio = require('cheerio');

    request.get('https://random.cat/', (err, res, page) => {
        const $ = cheerio.load(page);
        message.channel.send({ embed: new Discord.RichEmbed()
                .setTitle(`Cat`)
                .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
                .setImage($(" img").attr("src"))
                .setURL(res.request.uri.href)
        });
    });
};


    /*
    const Discord = require("discord.js");
    const snekfetch = require('snekfetch');

    exports.run = async (client, message, args) => {
        try {
            const { body } = await snekfetch
                .get('https://www.reddit.com/r/cats.json?sort=top&t=week')
                .query({ limit: 800 });
            const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
            if (!allowed.length) return message.channel.send('It seems we are out of pics!, Try again later.');
            const randomnumber = Math.floor(Math.random() * allowed.length)
            const embed = new Discord.RichEmbed()
                .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
                .setTitle(allowed[randomnumber].data.title)
                .setDescription("Posted by: " + allowed[randomnumber].data.author)
                .setImage(allowed[randomnumber].data.url)
                .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
                .setFooter("pics provided by r/cats")
            message.channel.send(embed)
        } catch (err) {
            return console.log(err);
        }
    }

/*
* const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require('snekfetch');
exports.run = async (client, message, args) => {
	try {
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/dankmemes.json?sort=top&t=week')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.RichEmbed()
        .setColor(0x00A2E8)
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
        .setFooter("Memes provided by r/dankmemes")
        message.channel.send(embed)
    } catch (err) {
        return console.log(err);
    }
}
* */

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    botPerms: [],
    memberPerms: [],
    servers: ['global','tdu','test']
};


exports.help = {
    name: 'cat',
    description: 'posts a random cat',
    usage: 'cat'
};
