exports.run = (bot, message, args) => {
  if (!isNaN(args[0]) && args[0].length == 4 && !args[0].includes(".")){
    //message.reply(" I have 4 numbers and I'm attempting to solve this.")
    n1 = parseInt(args[0].slice(0,1));
    n2 = parseInt(args[0].slice(1,2));
    n3 = parseInt(args[0].slice(2,3));
    n4 = parseInt(args[0].slice(3,4));
    message.reply("solving with " + n1 + ", "+ n2 + ", "+ n3 + ", "+ n4);
    solve(n1, n2, n3, n4);
  } else {
    message.reply ("Please enter 4 numbers.");
  }


  function op(num1, num2, operation) {
    if (operation == "+"){
      return num1+num2;
    }else if (operation == "-"){
      return num1-num2;
    }else if (operation == "*"){
      return num1*num2;
    }else if (operation == "/"){
      return num1/num2;
    }
  }

  function solve(a, b, c, d){
    var symbols = ["+", "-", "*", "/"];
    var solutions = "";
    for (var s1 in symbols){
      for (var s2 in symbols){
          for (var s3 in symbols){
            try {
              var num = op(op(op(a, b, s1), c, s2), d, s3);
              if (num == 10){
                solutions += `((${a}${s1}${b})${s2}${c})${s3}${d}\n`;
                message.channel.send("((" + a + s1 + b + ")" + s2 + c + ")" + s3 + d);
              }
            } catch (e) {
          }
        }
      }
    }
    message.channel.send(solutions);
  }



};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['tg'],
	botPerms: [],
	memberPerms: []
};

exports.help = {
	name: 'traingame',
	description: 'A calculator for the Sydney train game!',
	usage: 'traingame XXXX'
};
