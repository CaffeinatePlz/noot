exports.run = async (bot, message, args) => {

  const { stripIndents } = require('common-tags');
//make better list later

    var fs = require("fs");
    var text = fs.readFileSync("./data/hangman.txt", "utf-8");
    var wordList = text.split("\n");

  try {
		const word = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
		let mistakes = 0;
		let displayText = null;
		let guessed = false;
		const confirmation = [];
		const incorrect = [];
		const display = new Array(word.length).fill('_');

    while (word.length !== confirmation.length && mistakes < 6) {
      message.channel.send(stripIndents`
				${displayText === null ? 'Here we go!' : displayText ? 'Good job!' : 'Nope!'}
				\`${display.join(' ')}\`. Which letter do you choose?
				Incorrect Tries: ${incorrect.join(', ') || 'None'}
				\`\`\`
				___________
				|     |
				|     ${mistakes > 0 ? 'O' : ''}
				|    ${mistakes > 2 ? '—' : ' '}${mistakes > 1 ? '|' : ''}${mistakes > 3 ? '—' : ''}
				|    ${mistakes > 4 ? '/' : ''} ${mistakes > 5 ? '\\' : ''}
				===========
				\`\`\`
			`);

			const filter = res => {
				const choice = res.content.toLowerCase();
				return res.author.id === message.author.id && !confirmation.includes(choice) && !incorrect.includes(choice);
			};
      const guess = await message.channel.awaitMessages(filter, {
				max: 1,
				time: 30000
			});

      if (!guess.size) {
				message.channel.send('Sorry, time is up!');
				break;
			}

			const choice = guess.first().content.toLowerCase();
			if (choice === 'end') break;
      if (choice.length > 1 && choice === word) {
				guessed = true;
				break;
			} else if (word.includes(choice)) {
				displayText = true;
				for (let i = 0; i < word.length; i++) {
					if (word.charAt(i) !== choice) continue;
					confirmation.push(word.charAt(i));
					display[i] = word.charAt(i);
				}
			} else {
				displayText = false;
				if (choice.length === 1) incorrect.push(choice);
				mistakes++;
			}
		}

		if (word.length === confirmation.length || guessed) return message.channel.send(`You won, it was ${word}!`);
		return message.channel.send(`Too bad... It was ${word}...`);

  } catch (err) {
		return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
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
  	name: 'hangman',
  	description: 'play a game of hangman!',
  	usage: 'hangman'
  };
