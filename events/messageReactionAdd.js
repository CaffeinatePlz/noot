module.exports = async (bot, messageReaction, user) => {
    const Discord = require('discord.js');
    
    const ART_CATEGORY_ID = '777329113588432916';
    const ART_HOF_ID = '800875067415855154';
	const EMOTE_ID = '801242047671173123';

	if (messageReaction.partial) {
		try {
			await messageReaction.fetch();
		} catch (error) {
			console.log('Something went wrong when fetching the reaction: ', error);
		}
	}
	if (messageReaction.message.partial) {
		// If the message was removed the fetching might result in an API error, which we need to handle
		try {
			await messageReaction.message.fetch();
		} catch (error) {
			console.log('Something went wrong when fetching the message: ', error);
		}
	}

	let msg = messageReaction.message;
    if (msg.channel.type === "dm") return;
    if (msg.guild.id != process.env.FIVEUP_GUILD_ID) return;
    if (msg.channel.parentID != ART_CATEGORY_ID) return;
    if (msg.attachments.size == 0) return;

    var HallOfFame = msg.guild.channels.cache.get(ART_HOF_ID);
	if (!HallOfFame) return;
	if (!HallOfFame.permissionsFor(msg.guild.me).has("SEND_MESSAGES")) return;

	if (messageReaction.users.resolve(bot.user.id)) return console.log('caught!' + counter);

	if (messageReaction.me) return console.log("hi");
	if (messageReaction.users.cache.has(bot.user.id)) return console.log("hello art chat pt 2: electric boogaloo");

    limit = 15;
	if (limit == 0) return;

	const dateDiff = (new Date()) - messageReaction.message.createdAt;
	const days = 2;
    const dateCutoff = 1000 * 60 * 60 * 24 * days; 
    if (Math.floor(dateDiff / dateCutoff) >= days) {
      console.log(`a message older than ${days} days was reacted to, ignoring`)
      return
	}

	if (messageReaction.emoji.id == EMOTE_ID && messageReaction.count >= limit && !messageReaction.me) {
		var guild = bot.guilds.cache.get(process.env.FIVEUP_GUILD_ID);
		await guild.channels.cache.get(ART_HOF_ID).messages.fetch({limit:50})
		   .then(messages => {
			   let arr = messages.array();
			   let old_id = '';
			   for (let i = 0; i < arr.length; i++){
				   console.log("checking");
				   try {
					   old_id = String(arr[i].embeds[0].footer.text).match(/\d{18}/g);
					   console.log(old_id)
				   } catch (err) {
					   console.log(err);
				   }
				   				   
				   if (parseInt(old_id) == parseInt(msg.id)){
					   throw new Error ("error");
					   return console.log('compare 1');
				   }
			   }
			   if(msg.reactions.cache.has(bot.user.id)) return console.log('caught pt2!');
			   msg.react(EMOTE_ID);
			   const HoF = new Discord.MessageEmbed();
			   const msgLink = `https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`;
			   HoF.setColor(`${msg.member.displayHexColor}`)
				   .setTitle('Hall of Fame 🏆')
				   .setFooter(`Message ID: ${msg.id}`)
				   .setTimestamp()
				   .setDescription(`→ [original message](${msgLink})`);
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

		   })
		   .catch(err => console.log("Kinda fake error" + err));
	   
	   
   		};
};