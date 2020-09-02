// const INCOMING_CATEGORY = '655241137212096553';
// const ARCHIVED_CATEGORY = '656077269260828682';
// const HOST_ROLE = '655240553931341824';
// const ONLINE_ROLE = '656078383595126794';
//
//
// exports.run = (bot, message, args) => {
//
//     if (parseInt(args[0]) <10000 && parseInt(args[0]) > 0){
//
//         let server = message.guild;
//         let channel;
//
//         if(message.channel.parentID == ARCHIVED_CATEGORY){
//             channel = message.channel;
//             channel.setParent(INCOMING_CATEGORY).catch(console.error);
//             channel.overwritePermissions(message.author, {
//                 SEND_MESSAGES: true
//             })
//                 .catch(console.error);
//             channel.send("<@&" + ONLINE_ROLE + "> , a call has been started by <@" + message.author.id + ">");
//
//         } else if (message.channel.parentID == INCOMING_CATEGORY){
//             channel = message.channel;
//             channel.send("<@&" + ONLINE_ROLE + "> , a call has been started by <@" + message.author.id + ">");
//
//         } else {
//             if(server.channels.find(channel => channel.name === args[0])){
//                 channel = server.channels.find(channel => channel.name === args[0]);
//
//                 channel.setParent(INCOMING_CATEGORY).then( channel => {
//                         channel.overwritePermissions(message.author, {
//                             VIEW_CHANNEL: true
//                         })
//                             .then( channel => {
//                                 message.channel.send("A call has been started in <#" + channel.id + ">");
//                                 channel.send("<@&" + ONLINE_ROLE + "> , a call has been started by <@" + message.author.id + ">");
//
//                             })
//                     }
//                 )
//
//
//             } else {
//                 server.createChannel(args[0], "text")
//                     .then(channel =>{
//                         channel.setParent(INCOMING_CATEGORY).then( channel => {
//                                 channel.overwritePermissions(message.author, {
//                                     VIEW_CHANNEL: true
//                                 })
//                                     .then( channel => {
//                                         message.channel.send("A call has been started in <#" + channel.id + ">");
//                                         channel.send("<@&" + ONLINE_ROLE + "> , a call has been started by <@" + message.author.id + ">");
//
//                                     })
//                             }
//                         )
//
//                     })
//
//             }
//         }
//         let x;
//         let logChannel = message.guild.channels.get('662842188748816389');
//         logChannel.fetchMessages({ limit: 1 }).then(messages => {
//             let lastMessage = messages.first();
//             x = parseInt(lastMessage.content) + 1;
//             logChannel.send(x);
//         });
//         logChannel.bulkDelete(1);
//     }
//     else {
//         message.channel.send("Attempt failed, are you entering a valid team number?")
//     }
// };
//
// exports.conf = {
//     enabled: true,
//     guildOnly: false,
//     aliases: ['start','call','startchat'],
//     botPerms: [],
//     memberPerms: [],
//     servers: ['cc']
// };
//
//
// exports.help = {
//     name: 'startcall',
//     description: 'Starts a private chat with our call centre staff, using "+startcall yourteamnumber"!',
//     usage: 'startcall yourteamnumber (e.g. +startcall 1234)'
// };
