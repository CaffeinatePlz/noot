exports.run = (bot, message, args) => {
  const Discord = require('discord.js');
  const TBA = require('tba-api-storm');
  let tba = new TBA(process.env.TBA_TOKEN);
  if (!isNaN(args[0])) {
    var team_no = args;
    var info = new Discord.RichEmbed();
    tba.getTeam(team_no).then(a => {
      info.setAuthor('FIRST® Robotics Competition Team ' + team_no,)
        .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
        .addField('Name', a.nickname, true)
        .addField('Rookie Year', a.rookie_year, true)
        .addField('Location', `${a.city}, ${a.state_prov}, ${a.country}`, true);
      if (a.website !== null) { info.addField('Website', a.website, true); };
      if (a.motto !== null) { info.addField('Motto', a.motto, true); };
      message.channel.send({embed: info});
    }).catch(e => { message.channel.sendMessage('```js\n'+e+"```"); message.channel.sendMessage('I cannot find this team. Does it exist?'); });
  } else if (!isNaN(args[1])) {
    if (args[0] === 'awards') {
      let year = args[2];
      let team_no = args[1];
      if (!isNaN(year)) {
        var awardlist = new Discord.RichEmbed();
        tba.getTeamAwards(team_no, year).then(a => {
            awardlist.setAuthor('Awards for FIRST® Robotics Competition Team ' + team_no)
              .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
            var awards = [''];
            var n = 0;
            for (var i = 0; i < a.length; i++) {
                if ((awards[n] + '[' + a[i].event_key + '] ' + a[i].name).length >= 1024) {
                    n++;
                }
                if (awards[n] == undefined) {
                    awards[n] = '[' + a[i].event_key + '] ' + a[i].name + '\n';
                } else {
                    awards[n] += '['+ a[i].event_key + '] ' + a[i].name + '\n';
                }
            }
            for (var b = 0; b < awards.length; b++) {
                if (awards[b] !== undefined) {
                    if (awards.length === 1) {
                        awardlist.addField('Award List', awards[b]);
                    } else {
                        awardlist.addField('Award List Page ' + (b + 1), awards[b]);
                    }
                }
                if (awardlist.fields.length === 4 || b === awards.length - 1) {
                    message.channel.send({embed: awardlist});
                }
            }
        }).catch(e => {
            message.reply(e);
        });
      } else {
        var awardlist = new Discord.RichEmbed();
        let year = null;
        tba.getTeamAwards(team_no, year).then(a => {
            awardlist.setAuthor('Awards for FIRST® Robotics Competition Team ' + team_no)
              .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
            var awards = [''];
            var n = 0;
            for (var i = 0; i < a.length; i++) {
                if ((awards[n] + '[' + a[i].event_key + '] ' + a[i].name).length >= 1024) {
                    n++;
                }
                if (awards[n] == undefined) {
                    awards[n] = '[' + a[i].event_key + '] ' + a[i].name + '\n';
                } else {
                    awards[n] += '['+ a[i].event_key + '] ' + a[i].name + '\n';
                }
            }
            for (var b = 0; b < awards.length; b++) {
                if (awards[b] !== undefined) {
                    if (awards.length === 1) {
                        awardlist.addField('Award List', awards[b]);
                    } else {
                        awardlist.addField('Award List Page ' + (b + 1), awards[b]);
                    }
                }
                if (awardlist.fields.length === 4 || b === awards.length - 1) {
                    message.channel.send({embed: awardlist});
                }
            }
        }).catch(e => {
            message.reply(e);
        });
        //return message.reply("Please specify a year! E.g `+tba awards 3132 2017`")
      };
    }
  } else {
    message.channel.sendMessage('Please mention a team (`+tba <team_number>`)');
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
	name: 'tba',
	description: 'Displays info about a FRC team!',
	usage: 'tba <team_number> | tba awards <team_number> <year>'
};
