/**
 * Provides some amazing and inspirational quotes
 * @param {module:discord.js.Client} bot
 * @param {module:discord.js.Message} message
 * @param {string[]} [args]
 */
exports.run = (bot, message, args) => {
    const nickQuotes = [
        "With confidence, it doesn't matter what you're wearing, or how terrible it is. Actually, it doesn't matter how awesome your clothes are, either. the confidence they give you comes from you, not the clothes.",
        "Learn your limits, pursue the things you're both interested in and reasonably good at, and if you have an aggressive inner workaholic, learn to tame them.",
        "Dating is rather like building a robot. You learn by failing.",
        "Meet people around your age. If you like them, and they're single, let them know. Many of them will say no, and that's okay.",
        "[Rejection] gets less hard, not not hard.",
        "And sometimes it's not outright rejection. People joke about \"it's not you it's me\" being a fake excuse, but sometimes it's a legit thing. And if you're open and honest with them, and they're kind people with decent communication skills, you'll know which. And it's okay to feel sad about it too. Because if someone for whatever reason isn't in a place to be in a relationship with you, them saying yes anyway would be worse for both of you. And maybe both people feel sad about it. That's a thing.",
        "I think the best way to maximize people's potential is to show them that they can. I mean, there are so many people who just see hopelessness... [we need] to show them that glimmer of hope.",
        "It doesn't have to be correct to be interesting",
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
        "Hey you. Yes, you. No, not the other one. You. You're pretty neat.",
        "Remember personal hygiene at competition; just because they're called pits doesn't mean they should smell like it.",
        "There's an amount of work you can do where you're getting negative returns on extra time, and if you're doing physical labor, part of that is an increased risk of safety issues. While you're in school, that's lessened because of time you're spending in class. All work and no play is no good. It can also be damaging to your academics.",
        "I've never opened a cat.",
        "Fake it till you make it.",
        "Relationships simply are hard. but to me, that's a feature; it's rewarding doing hard things, especially when the outcome is so good",
        "Forget the haters.",
        "Just because you can does not mean you should.",
        "Do your best, but in a sustainable way. Life's a marathon, not a sprint.",
        "Fail early, fail fast, fail often.",
        "Hayley is an awesome hooman",
        "We all fall short. A good friend is one who does their best, not one whose best is perfect.",
        "Your 100% isn't the same every day. Sometimes your 100% is 60% of your best best, but like, that's all you've got right then. Unless you're a Time Lord.",
        "If you only help people, you have nothing left for yourself, and fail to help people ultimately.",
        "You need to have a base of self-care, or you'll burn out. Spend the interest, not the principle.",
        "Everyone around you is getting better. You really do need to run to stay in place.",
        "Just remember, everyone has something to learn from them, including past [you]",
        "Don't regret the past, you can't change it. Unless you've figured out time travel, then please, share the details.",
        "If you figure out how to make a career of running from boilers and shooting Nazis, let me know.",
        "have you considered becoming a vampire?",
        "Build good robots by finding all the ways to build less good robots, and not doing those.",
        "Be honest and open. Let the chips fall where they may. I don't think you need to push on a particular outcome, once you do that.",
        "Your food might taste like fancy soap. But the key word is fancy.",
        "Doing moderation in moderation is okay sometimes.",
        "Apply. What's the worst that happens, they tell you no?",
        "A lot of things in academics are not about intelligence, but rule following. And it's a shame, because being taught to follow rules can be fine, but knowing how and when not to follow them is a valuable thing educated out of too many people.",
        "I would expect someone really really good at following rules to be less successful than someone who knows how, but critically when, to play the game. Do your best, but always be skeptical, especially of what the scores, and success metrics others give you really mean.",
        "Family doesn't mean just blood relatives. You can make family beyond simply having one.",
        "Your plans will change 10 times before you're 25, and that's okay.",
        "Honestly, I can mentor things I'm not great at. Less than half of it is knowing that thing. You can ask questions from a sincere place to critique designs.",
        "Build good robots by finding all the ways to build less good robots, and not doing those.",
        "*jared russell gets an email, confused why he got an email from some australian with the 53ND IT copypasta signed with a heart*",
        "We all have regrets. There may be multiple universes with a different person who made different choices, but if the universe really is a branching tree of possibilities, you can only do anything about the possibilities in your future. Don't mull over your mistakes, learn from them.",
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
        "Uh, finding a girlfriend is hard. Dw about it and just focus on being awesome.",
        "Don't fear what you don't know, or aren't good at; embrace it. That's the place where you learn the most.",
        "Everyone around you is getting better. You really do need to run to stay in place.",
        "You want to do this aspirational thing. Well, let's break it down. What's the first step? So you want to get here. What's two steps back? What's square one? Well, okay. Square one is stretching yourself a little bit.",
        "Let's turn this impossible problem into two really hard problems.",
        "The most beautiful thing in the world? I would have to say... that we are the universe's way of observing itself.",
        "I think that young people have not only the passion and the excitement to do big things, but I think they increasingly have the power to do so.",
        "I've met so many amazing young people who are doing things that others might not think that they could or 'should'.",
        "I would put DL this way: if you win, you've clearly done something to earn it. If you didn't, that doesn't say anything about your deservingness.",
    ];

    message.channel.send( "\""+ nickQuotes[Math.floor(Math.random() * nickQuotes.length)] + "\"" + "\n*-THE Nick Hammes*");
};

/**
 * Config for `nickquote`
 * Defaults:
 * `enabled`: `true`
 * `guildOnly`: `false`
 * `aliases`: `["nickquotes", "nickQuotes"]`
 * `botPerms`: `[]`
 * `memberPerms`: `[]`
 * @type {{enabled: boolean, guildOnly: boolean, aliases: string[], botPerms: Array, memberPerms: Array}}
 */
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["nickquotes", "nickQuotes"],
    botPerms: [],
    memberPerms: []
};

/**
 *
 * @type {{name: string, description: string, usage: string}}
 */
exports.help = {
    name: "nickquote",
    description: "Everyone needs some Nick wisdom.",
    usage: "nickquote"
};
