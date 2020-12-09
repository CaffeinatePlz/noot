// const INCOMING_CATEGORY = '655241137212096553';
// const ARCHIVED_CATEGORY = '656077269260828682';
// const HOST_ROLE = '655240553931341824';
// const ONLINE_ROLE = '656078383595126794';
//
//
// exports.run = (bot, message, args) => {
//
//     if(message.channel.parentID == INCOMING_CATEGORY){
//         message.channel.setParent(ARCHIVED_CATEGORY);
//         message.channel.send("Call ended. Any new messages after this will start a new call.")
//     } else {
//         message.channel.send("This command can only be used in an active call channel.");
//     }
// };
//
// exports.conf = {
//     enabled: true,
//     guildOnly: false,
//     aliases: ['end','endchat'],
//     botPerms: [],
//     memberPerms: [],
//     servers: ['cc']
// };
//
//
// exports.help = {
//     name: 'endcall',
//     description: 'Archives the channel. Will be available to view, and must be used in an active call channel.',
//     usage: '+endcall'
// };
