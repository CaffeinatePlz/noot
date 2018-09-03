exports.run = (bot, message, args) => {
  var str = "Send it? You don't know what it means? Well, let me tell you a little story. Think of the 'send' as the package. We're sending that package. Where? Doesn't matter. It's about the send, not the destination. Now, let's begin. Let's say you order a package off of Amazon™, but it never makes it past the website. That right there? That's a no send. No sender. Not even sent. Now you apply it to the Cheesy Poofs. Let's say we start a match, and the FMS data is sent out. But, the robot doesn't move. The Poofs don't pass the auto line, and they don't collect their five points. Bam. No send. Not a single aspect of the autonomous was sent. Anywhere.\n\n" +
  "Half send? Well, let's say you order that package off of Amazon™. This time, it makes it past the website and your package leaves the warehouse; but, it's otherwise lost, stolen, or destroyed on its way to your house. Half send. That's a half sender. It probably got halfway there, but wasn't fully sent. Let's look back at the Poofs' auton. Now, the match starts, and Lockdown© moves. But, alas, its elevator hits the scale and the robot tips over, or only two of the four cubes successfully get placed. Bam, half send. That's a half sender. Half of those power cubes were sent.\n\n" +
  "Fully send, though? Well, let's, again, say you order that same package off of Amazon™. This time around, the package arrives all in one piece, no damage. You pick it up, sign for it, and use its contents. Now that, my friend, is a full send. Back to the auton though. Now the Poofs pickup those four power cubes and place all four of them on the scale. They now own that scale. Bam, full send. Those four cubes? Fully sent. You could say that those first fifteen seconds were a full send.\n\n" +
  "But, you go 53-0? Now, that's not a full send, that's a next level of send. That, my good friend, is a FULL 53ND.\n\nThis is the art of the send, and let me ask you: are you silly?\n\n"+
  "*~Jared the Cute Lyon*";

  message.channel.send(str);
};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['53nd', '53ndit'],
	botPerms: [],
	memberPerms: []
};


exports.help = {
	name: 'full53nd',
	description: 'Just 53nd it',
	usage: 'full53nd'
};
