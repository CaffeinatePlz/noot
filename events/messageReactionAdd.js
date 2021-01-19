module.exports = async (bot, messageReaction, user) => {
    const Discord = require('discord.js');
    
    const ART_CATEGORY_ID = '777329113588432916';
    const ART_HOF_ID = '800875067415855154';
    const EMOTE_ID = '767115090503270441';

	let msg = messageReaction.message;
    if (msg.channel.type === "dm") return;
    if (msg.guild.id != process.env.FIVEUP_GUILD_ID) return;
    if (msg.channel.parentID != ART_CATEGORY_ID) return;
    if (msg.attachments.size == 0) return;

    var HallOfFame = msg.guild.channels.cache.get(ART_HOF_ID);
	if (!HallOfFame) return;
	if (!HallOfFame.permissionsFor(msg.guild.me).has("SEND_MESSAGES")) return;
	if (messageReaction.me) return;
	// var emoji = msg.guild.emojis.cache.get(e => e.id == EMOTE_ID);
    // if (!emoji) return console.log("2d");

    limit = 10;
	if (limit == 0) return;
	if (messageReaction.emoji.id == EMOTE_ID && messageReaction.count >= limit) {
		//msg.react(emoji.id);
		const HoF = new Discord.MessageEmbed();
		HoF.setColor(`${msg.member.displayHexColor}`)
			.setTitle('Hall of Fame 🏆')
			.setURL(`http://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`)
			.setFooter('Hall of Fame 🏆')
			.setTimestamp()
		if (msg.member.nickname == null) {
			HoF.addField('User', `${msg.author}`, true)
		} else {
			HoF.addField('User', `${msg.author} (${msg.author.tag})`, true);
		};
		HoF.addField('Channel', `${msg.channel}`, true)
		if (msg.attachments.size == 0) {
			HoF.addField('Message', `${msg}`)
		} else {
            pictures = msg.attachments.array();
            
			if (msg.content != "") {
				HoF.addField('Message', `${msg.content}`)
			}
			HoF.setImage(pictures[0].url)
		}
		HallOfFame.send({
			embed: HoF
		});
	};
};