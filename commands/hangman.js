exports.run = async (bot, message, args) => {

  const { stripIndents } = require('common-tags');

  var wordList = [
    'test',
    'hello',
    'world',
  ];

  try {
		const word = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
		let points = 0;
		let displayText = null;
		let guessed = false;
		const confirmation = [];
		const incorrect = [];
		const display = new Array(word.length).fill('_');

    while (word.length !== confirmation.length && points < 6) {
      message.channel.send(stripIndents`
				${displayText === null ? 'Here we go!' : displayText ? 'Good job!' : 'Nope!'}
				\`${display.join(' ')}\`. Which letter do you choose?
				Incorrect Tries: ${incorrect.join(', ') || 'None'}
				\`\`\`
				___________
				|     |
				|     ${points > 0 ? 'O' : ''}
				|    ${points > 2 ? '—' : ' '}${points > 1 ? '|' : ''}${points > 3 ? '—' : ''}
				|    ${points > 4 ? '/' : ''} ${points > 5 ? '\\' : ''}
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
				points++;
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
