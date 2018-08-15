const Discord = require('discord.js');
const TBA = require('tba-api-storm');

exports.run = (bot, message, args) => {
  let tba = new TBA(TBA_TOKEN);
  var args = message.content.split(' ')[0];
  if (!isNaN(args)) {
    var team_no = args;
    var info = new Discord.RichEmbed();
    tba.getTeam(team_no).then(a => {
      info.setAuthor('FIRST® Robotics Competition Team ' + team_no, 'https://www.thebluealliance.com/team/' + team_no)
        .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
        .addField('Name', a.nickname, true)
        .addField('Rookie Year', a.rookie_year, true)
        .addField('Location', `${a.city}, ${a.state_prov}, ${a.country}`, true)
        .addField('Website', a.website, true);
      if (a.motto !== null) { teaminfo.addField('Motto', a.motto, true); }
      sendEmbed(info);
    }).catch(e => { message.channel.sendMessage('I cannot find this team. Does it exist?'); });
  } else {
    message.channel.sendMessage('Please mention a team (`+tba <team_number>`)');
  }
};
