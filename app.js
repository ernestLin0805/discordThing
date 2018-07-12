const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const token = require('./settings.json').token;
var prefix = "/"

client.on('ready',() => {
  console.log('I\'m online');
})

client.on('reconnecting', () => {
  message.channel.send('I\'m back! ${new Date()}');
})

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage('${member.user.username}, welcome to Wood Division, where it\'s ok to suck because we all suck!');
})

client.on('guildBanAdd', (guild, user) => {
  guild.defaultChannel.sendMessage('${user.username} was just banned!')
})

client.on('guildBanRemove', (guild, user) => {
  guild.defaultChannel.sendMessage('Congrats ${user.username}! You were just unbanned!')
})

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  let args1 = message.content.split(' ').slice(1);
  var argresult = args1.join(' ');
  if (message.author.bot) return;
  if (message.content.startsWith(prefix +'ping')){
      message.reply('pong!');
  }
  else if (message.content === 'Introduce yourself Ghoulbot') {
    message.channel.send('Greetings. I am Ghoulbot1, an Artificial Intelligence created by Harvard University.');
    message.channel.send({files: ["https://www.diarystore.com/sites/default/files/featureimage-education/harvard_university_1-min.jpg"]})
    message.channel.send(' What are your commands.')
  }

  if (message.content.startsWith(prefix + 'help')){
    message.channel.send('Available commands:\n/help\n/ping\n/avatar');
  }
  if (message.content.startsWith(prefix + 'avatar')){
    message.reply(message.author.avatarURL);
    message.reply('Nice picture you got there, but it is nothing compared to the beauty of my friend da wae\'s queen.');
    message.channel.send({files: ["https://i.kym-cdn.com/photos/images/original/001/331/026/0ca.png"]});
  }

  if (message.content.startsWith(prefix + 'setGame')){
    client.user.setActivity(argresult);
  }

  if (message.content.startsWith(prefix + 'setstatus')){
    client.user.setStatus(argresult);
  }
});

client.login(token);
