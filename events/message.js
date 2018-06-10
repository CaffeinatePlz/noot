module.exports = async (bot, message) => {
    if (message.channel.type === "dm" && message.author.id != bot.user.id){

      console.log("[DM] " + message.channel.recipient.username + " | " + message.content);

      channel_ID = '400779864191401984';
      guild_ID = '356764662760472576';
      bot.guilds.get(guild_ID).channels.get(channel_ID).send(message.content + " [DM]" + message.author + " <@338163785082601473>");

    }
    if (message.channel.type === "dm") return;
    if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
    if (!message.channel.type === "text" || !message.guild) return;
    if (message.author.bot) return;
    const message1 = message.content.toLowerCase();
    if (!message.content.startsWith("+")){
      if(message1 == "sleep"||message1.includes("go to sleep")||message1.includes("need sleep")||message1.includes("needs sleep")){
        message.channel.send("Go to sleep!");
      }
      if(message1.includes("hayl")|message1.includes("hayley")){
        channel_ID = '400779864191401984';
        guild_ID = '356764662760472576';
        bot.guilds.get(guild_ID).channels.get(channel_ID).send(message.content + " [" + message.channel.name + "]" + " <@338163785082601473>");
      }
      if(message1.includes("fight")||message1.includes("fite")){
        message.channel.send("(ง'̀-'́)ง");
      }
      if(message1.includes("gracious professionalism")||message1 == "gp"){
        message.channel.send("*CLAP CLAP* WOOOOOO!!!!!");
      }
      if(message1.includes("garbage")||message1.includes("trash")||message1.includes("no me")||message1.includes("no u")||message1.includes("nay thee")||message1.includes("no  u")){
        message.channel.send(message.author + " , you're awesome :heart:");
      }
    }
    bot.processMessage(message);
}
