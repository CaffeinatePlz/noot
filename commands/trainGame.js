exports.run = (bot, message, args) => {
  const math = require('mathjs');
  if (!isNaN(args[0]) && args[0].length == 4 && !args[0].includes(".")){
    n1 = parseInt(args[0].slice(0,1));
    n2 = parseInt(args[0].slice(1,2));
    n3 = parseInt(args[0].slice(2,3));
    n4 = parseInt(args[0].slice(3,4));
    solve(n1, n2, n3, n4);
  } else {
    message.reply ("Please enter 4 numbers.");
  }

  function operation(num1, num2, operation) {
      if (operation === "+") {
          return num1 + num2;
      }
      else if (operation === "-") {
          return num1 - num2;
      }
      else if (operation === "*") {
          return num1 * num2;
      }
      else if (operation === "/") {
          return num1 / num2;
      }
      else if (operation === "^") {
          return math.pow(num1, num2);
      }
  }

  function factorialize(num) {
    if (num < 0)
          return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }

  function z(num1, x) {
      if (x === "!") {
          return factorialize(num1);
      }
      else if (x === " ") {
          return num1;
      }
  }

  function solve(a, b, c, d) {
    const symbols = ["+", "-", "*", "/", "^"];
    const x = ["!", " "];
    var solutions = "";
      for (let s1 of symbols) {
          for (let s2 of symbols) {
              for (let s3 of symbols) {
                for (let x1 of x) {
                  for (let x2 of x) {
                    for (let x3 of x) {
                      for (let x4 of x) {
                        try {
                            if (operation(operation(operation(z(a,x1), z(b,x2), s1), z(c,x3), s2), z(d,x4), s3) === 10) {
                                solutions += `((${a}${x1}${s1} ${b}${x2}) ${s2} ${c}${x3}) ${s3} ${d}${x4}\n`;
                            }
                        }
                        catch (e) {
                            //do nothing
                        }
                      }
                    }
                  }
                }
              }
          }
      }
      if (solutions.length === 0){
        message.channel.send("```No solutions found.```");
      }else{
        message.channel.send("```" + solutions + "```");
      }
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


/*
exports.run = (bot, message, args) => {
  const math = require('mathjs');
  if (!isNaN(args[0]) && args[0].length == 4 && !args[0].includes(".")){
    //message.reply(" I have 4 numbers and I'm attempting to solve this.")
    n1 = parseInt(args[0].slice(0,1));
    n2 = parseInt(args[0].slice(1,2));
    n3 = parseInt(args[0].slice(2,3));
    n4 = parseInt(args[0].slice(3,4));
    solve(n1, n2, n3, n4);
  } else {
    message.reply ("Please enter 4 numbers.");
  }

  function operation(num1, num2, operation) {
      if (operation === "+") {
          return num1 + num2;
      }
      else if (operation === "-") {
          return num1 - num2;
      }
      else if (operation === "*") {
          return num1 * num2;
      }
      else if (operation === "/") {
          return num1 / num2;
      }
      else if (operation === "^") {
          return math.pow(num1, num2);
      }
  }

  function solve(a, b, c, d) {
    const symbols = ["+", "-", "*", "/", "^"];
    const x = ["!", "-"];
    var solutions = "";
      for (let s1 of symbols) {
          for (let s2 of symbols) {
              for (let s3 of symbols) {
                  try {
                      if (operation(operation(operation(a, b, s1), c, s2), d, s3) === 10) {
                          solutions += `((${a}${s1}${b})${s2}${c})${s3}${d}\n`;
                      }
                  }
                  catch (e) {
                      //do nothing
                  }
              }
          }
      }
      if (solutions.length === 0){
        message.channel.send("```No solutions found.```");
      }else{
        message.channel.send("```" + solutions + "```");
      }
  }



};*/
