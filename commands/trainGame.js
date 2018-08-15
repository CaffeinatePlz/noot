exports.run = (bot, message, args) => {
	function operation(num1, num2, operation) {
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
    symbols = ["+", "-", "*", "/"];
    for (var s1 in symbols){
      for (var s2 in symbols){
          for (var s3 in symbols){
            try {
              num = operation(operation(operation(a, b, s1), c, s2), d, s3);
              if (num == 10){
                message.channel.send("((" + str(a) + s1 + str(b) + ")" + s2 + str(c) + ")" + s3 + str(d));
              }
            } catch (e) {
              message.channel.sendMessage('```js\n'+e+"```");
          }
        }
      }
    }
  }

  if (!isNaN(args[0]) && args[0].length ==4){
    n1 = args[0].slice(0,1);
    n2 = args[0].slice(1,2);
    n3 = args[0].slice(2,3);
    n4 = args[0].slice(3,4);
    solve(n1, n2, n3, n4);
  } else {
    message.reply ("Please enter 4 numbers.");
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
