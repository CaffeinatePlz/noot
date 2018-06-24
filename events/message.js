module.exports = async (bot, message) => {
    if (message.channel.type === "dm" && message.author.id != bot.user.id){
      console.log("[DM] " + message.channel.recipient.username + " | " + message.content);
      /*channel_ID = '400779864191401984';
      guild_ID = '356764662760472576';
      bot.guilds.get(guild_ID).channels.get(channel_ID).send(message.content + " [DM]" + message.channel.recipient.username + " <@338163785082601473>");*/
      if (message.author.id != '338163785082601473' ){
        var userID = '338163785082601473';
        var guild_ID = '374179059212484608';
        bot.guilds.get(guild_ID).members.get(userID).send("[DM] | " + message.channel.recipient.username+ " | " + message.content);
      }
    }
    if (message.channel.type === "dm") return;
    if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
    if (!message.channel.type === "text" || !message.guild) return;
    if (message.author.bot) return;
    const message1 = message.content.toLowerCase();
    if (!message.content.startsWith("+")){
      if (message.author.id == '133350262420013056'){
        if(message1 == "omg"||message1 == "heck"||message1 == "oh my god"||message1 == "omggg"||message1 == "omgg"||message1 == "stoppit"||message1 == "darnit"){
          var x = [
            "Omggg it's a cutie!",
            "Owo *notices a cutie*",
            "Cutie.",
            "Aaaaahhh you're so cute omg!",
            "Hai, reminder that hayl loves you!",
          ];
          var msg = x[Math.floor(Math.random() * x.length)];
          message.channel.send("\"" + message.content + "\" \n" + msg);
        }
      }
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
      if(message1.includes("garbage")||message1.includes("trash")||message1.includes("no me")||message1.includes("no u")||message1.includes("no you")||message1.includes("no, you")||message1.includes("nay thee")||message1.includes("no  u")||message1.includes("no. u")||message1.includes("no, u")||message1.includes("no\nu")){
        if (!message.guild.id == '374179059212484608') return;
        message.channel.send(message.author + " , you're awesome :heart:");
      }
    }
    bot.processMessage(message);
}
