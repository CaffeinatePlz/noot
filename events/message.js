module.exports = async (bot, message) => {
  if (message.channel.type === "dm" && message.author.id != bot.user.id)
		return console.log("[DM] " + message.channel.recipient.username + " | " + message.content);
    if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
    if (!message.channel.type === "text" || !message.guild) return;
    if (message.author.bot) return;
    const message1 = message.content.toLowerCase();
    if (!message.content.startsWith("+")){
      if(message1.includes("sleep")){
        message.channel.send("Go to sleep!");
      }
      if(message1.includes("fight")||message1.includes("fite")){
        message.channel.send("(ง'̀-'́)ง");
      }
      if(message1.includes("Gracious Professionalism")||message1.includes("gp")){
        message.channel.send("*CLAP CLAP* WOOOOOO!!!!!");
      }
      if(message1.includes("garbage")||message1.includes("trash")||message1.includes("no me")||message1.includes("no u")){
        message.channel.send(message.author + " , you're awesome :heart:");
      }
    }
    bot.processMessage(message);
}
