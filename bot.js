const Discord = require('discord.js');
const client = new Discord.Client();


const adminprefix = "+";
const devs = ['462434603895095297','417377495160193044'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + '.')) {
  client.user.setGame(argresult);
} else 
  if (message.content.startsWith(adminprefix + '.')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
} else
  if (message.content.startsWith(adminprefix + '.')) {
client.user.setAvatar(argresult);
      } else     
  if (message.content.startsWith(adminprefix + '.')) {
        if (!devs.includes(message.author.id)) return;
  client.user.setActivity(argresult, {type:'WATCHING'});
  } else
  if (message.content.startsWith(adminprefix + '.')) {
        if (!devs.includes(message.author.id)) return;
  client.user.setActivity(argresult , {type:'LISTENING'});
  } else    
if (message.content.startsWith(adminprefix + 'setT')) {
      if (!devs.includes(message.author.id)) return;
  client.user.setGame(argresult, "https://www.twitch.tv/uzii");//حقوق دايموند كودزحقوق دايموند كودز
}
});


var prefix = "@";

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.login(process.env.BOT_TOKEN);
