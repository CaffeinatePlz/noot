exports.run = (bot, message, args) => {
  const Discord = require("discord.js");
  const request = require('request-promise-native');
  const cheerio = require('cheerio');
  const xkcd = require("xkcd");

  var choice;
  var number;

  if (args[0] == "asp" || args[0] == "amazingsuperpowers"){
    choice = 0;

  } else if (args[0] == "cah" || args[0] == "cyanideandhappiness"){
    choice = 1;

  } else if (args[0] == "cs" || args[0] == "commitstrip"){
    choice = 2;

  } else if (args[0] == "xkcd"){
    choice = 3;
    if (!isNaN(args[1])){
      number = args[1];
    }
  } else if (args[0] == "kyuuchan"){
      choice = 4;
  } else {
    //
  };

  if (isNaN(choice)){
    choice = Math.floor(Math.random() * 5);
  };

  post(choice, number);

  function post(choice, number){
    switch(choice) {
      case 0:
          request.get('http://www.amazingsuperpowers.com/?randomcomic&nocache=1', (err, res, page) => {
            const $ = cheerio.load(page);
            message.channel.send({ embed: new Discord.RichEmbed()
              .setTitle(`AmazingSuperPowers (`+ $('.post-title a').text()+`)`)
              .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
              .setImage($("#comic-1 img").attr("src"))
              .setURL(res.request.uri.href)
            });
          });
          break;
      case 1:
          request.get('http://explosm.net/comics/random', (err, res, page) => {
            const $ = cheerio.load(page);
            message.channel.send({ embed: new Discord.RichEmbed()
              .setTitle(`Cyanide & Happiness (${res.request.uri.href.split("/")[4]})`)
              .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
              .setImage("https:" + $("#main-comic").attr("src"))
              .setURL(res.request.uri.href)
            });
          });
          break;
      case 2:
          request.get('http://www.commitstrip.com/?random=1', (err, res, page) => {
            const $ = cheerio.load(page);
            message.channel.send({ embed: new Discord.RichEmbed()
              .setTitle(`CommitStrip (`+ $('.entry-title').text()+`)`)
              .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
              .setImage($(".entry-content img").attr("src"))
              .setURL(res.request.uri.href)
            });
          });
          break;
      case 3:
          if (!number){
            xkcd(function (data1) {
              let x = Math.floor(Math.random() * data1.num);
              xkcd(x, function (data){
                try {
                  message.channel.send({ embed: new Discord.RichEmbed()
                    .setAuthor('XKCD #' + data.num)
                    .setTitle(data.safe_title)
                    .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
                    .setImage(data.img)
                    .setDescription(data.alt)
                  });
                } catch (err) {
                  message.channel.send(err);
                }
              });
            });
          } else if (!isNaN(number)){
            xkcd(number, function (data) {
              try {
                message.channel.send({ embed: new Discord.RichEmbed()
                  .setAuthor('XKCD #' + data.num)
                  .setTitle(data.safe_title)
                  .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
                  .setImage(data.img)
                  .setDescription(data.alt)
                });
              } catch (err) {
                message.channel.send(err);
              }
            });
          } else {
            message.reply("Please use +xkcd <number>");
          }
          break;
        case 4:
            var num = Math.floor(Math.random() * 190).toString();
            var comic;
            console.log(num);

            if (num.length == 1) {

                comic = "00" + num;
                console.log (comic);
            } else if (num.length == 2) {
                comic = "0" + num;
                console.log (comic);
            };

            var webPage = 'https://mangapark.me/manga/m5a7408ee20e0f/s1/c' + comic + '/1';
            request.get(webPage, (err, res, page) => {
                const $ = cheerio.load(page);
                message.channel.send({
                    embed: new Discord.RichEmbed()
                        .setTitle(`Fushigi Neko no Kyuu chan (` + comic + `)`)
                        .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
                        .setImage($(".img-link img").attr("src"))
                        .setURL(res.request.uri.href)
                });
            });
            break;
      default:
          //
          break;
    }
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
	name: 'comic',
	description: 'posts a comic out of AmazingSuperPowers, CyanideAndHappiness, CommitStrip, and XKCD',
	usage: 'comic [comic]'
};
