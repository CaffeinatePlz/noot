exports.run = (bot, message, args) => {
  var nickQuotes = [
    "With confidence, it doesn't matter what you're wearing, or how terrible it is. Actually, it doesn't matter how awesome your clothes are, either. the confidence they give you comes from you, not the clothes.",
    "Learn your limits, pursue the things you're both interested in and reasonably good at, and if you have an aggressive inner workaholic, learn to tame them.",
    "Dating is rather like building a robot. You learn by failing.",
    "Meet people around your age. If you like them, and they're single, let them know. Many of them will say no, and that's okay.",
    "[Rejection] gets less hard, not not hard.",
    "And sometimes it's not outright rejection. People joke about \"it's not you it's me\" being a fake excuse, but sometimes it's a legit thing. And if you're open and honest with them, and they're kind people with decent communication skills, you'll know which. And it's okay to feel sad about it too. Because if someone for whatever reason isn't in a place to be in a relationship with you, them saying yes anyway would be worse for both of you. And maybe both people feel sad about it. That's a thing.",
    "Insight doesn't come easily. It's the child of experience. You get it, because it reflects what you've lived.",
    "You don't have to be great at calc to be a STEM major. I'm only passable. ~~too literally~~",
    "Just a reminder, https://cdn.discordapp.com/attachments/369269114239451138/445132577209057280/sucking_at_something.gif",
    "Chapter 18. Safety: the art of leaving robotics with the same number of limbs you came with.",
    "Anything worth measuring in watermelons per second is worth doing.",
    "Do things you aren't good at. That's how you get better.",
    "If you get a bunch of former FIRST students together, and they plan outreach, would they be the Alumninati?",
    "my roommate sleeps all day while I'm at school, and scratches at my door all night unless I let her sleep in my bed",
    "my roommate keeps bringing me bodies of things she's killed. I know she's proud of it, but she's getting blood all over the stoop",
    "asfdhi;drshjkerh;lhl;at;hjk;lK;HAHKL;dfshjkKLH;THJUEIVNJKLRE3IOHUAGRJKEA",
    "Just be your best self. That's all you can be.",
    "Remember personal hygiene at competition; just because they're called pits doesn't mean they should smell like it.",
    "There's an amount of work you can do where you're getting negative returns on extra time, and if you're doing physical labor, part of that is an increased risk of safety issues. While you're in school, that's lessened because of time you're spending in class. All work and no play is no good. It can also be damaging to your academics.",
    "I've never opened a cat.",
    "Fake it till you make it.",
    "Forget the haters.",
    "Just because you can does not mean you should.",
    "Do your best, but in a sustainable way. Life's a marathon, not a sprint.",
    "Fail early, fail fast, fail often.",
    "you just haven't found the right person. the karthik to you driver's station wall, the space cowboys to your prank war.",
    "Dude, everybody handing out the pins gave the FIRST community the opportunity to show love and support for people. What did you think was going to happen?",
    "Pain and difficulty are temporary. But they shape you into a stronger person, and the things that stronger you does, that better others, propagate on through others into the far future",
    "Use your anger, don't let your anger use you. If it's worth fighting, by all means have at it. But if the gains aren't worth the stress, anxiety, and frustration, take a deep breath and let it go.",
    "I think everyone has that instinct, to hide and be afraid, tbh. I used to be quiet and timid because I let it rule me, but in one area after another, I've learned to tell it no, bad instinct and be fearless. I hope one day I can defeat it everywhere.",
    "\"be extra cautious around tools you're not familiar with\" seems like a great rule of thumb if you want to keep both of your thumbs.",
    "A water game with no water would be the most-troll teaser ever. Like a short video with clips of kids on a boat, then the game logo FIRST  Seaworthy. Chief Delphi would actually explode.",
    "I think of it this way -- there are a lot of people , and just like physical characteristics, mental characteristics have a lot of individual variation.  Naturally, that means there will be a lot of people with different sets of experience. Add to that, that labels are basically a way of simplifying all of that variation down to a small number of words to describe one's own experience.. and it's inevitably going to be confusing to anyone, whether they're experiencing it or not.",
    "We've all fucked up a lot. As I'm fond of saying, the things I'm good at, I've made so many of the mistakes, and learned from them, that I don't make nearly as many now.",
    "There are good things about community colleges. There are good things about ivies. Those are obviously very different qualities. Heck, there are good things about trade schools. What you want is what makes them the best, not some objective third-party who doesn't know you, looking in and rating course content and student life metrics.",
    "\"major in something useful you like, and something you love\" is a good strategy.",
    "Don't be a workaholic.",
    "I would put DL this way: if you win, you've clearly done something to earn it. If you didn't, that doesn't say anything about your deservingness.",
  ];

  var msg = nickQuotes[Math.floor(Math.random() * nickQuotes.length)];
  message.channel.send( "\""+ msg + "\"" + "\n*-THE Nick Hammes*");
};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['nickquotes', 'nickQuotes'],
	botPerms: [],
	memberPerms: []
};


exports.help = {
	name: 'nickquote',
	description: 'Everyone needs some Nick wisdom.',
	usage: 'nickquote'
};
