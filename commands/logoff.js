const INCOMING_CATEGORY = '655241137212096553';
const ARCHIVED_CATEGORY = '656077269260828682';
const HOST_ROLE = '655240553931341824';
const ONLINE_ROLE = '656078383595126794';


exports.run = (bot, message, args) => {

    let role = message.guild.roles.find(r => r.name.toLowerCase() == "online");

    if (!message.member.roles.find(r => r.name.toLowerCase() == "call centre team")){
        message.reply('This command can only be used by a Call Center host team.')
    } else if (!message.member.roles.find(r => r.name.toLowerCase() == "online")) {
        message.reply('You do not have this role!');
    } else {
        message.member.removeRole(role).then(() => {
            message.channel.send("Role removed!");
        }).catch(err => {
            message.reply('I was unable to remove the role.');
        });
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['logout','offline'],
    botPerms: [],
    memberPerms: [],
    servers: ['cc']
};


exports.help = {
    name: 'logoff',
    description: 'Removes the Online role. Staff only!',
    usage: '+logoff'
};
