const {MessageEmbed} = require('discord.js')
module.exports = {
name: "uptime",
  category: "i",
  //aliases: ["setlogs"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {

let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
    
    let embed = new MessageEmbed()
     .setAuthor("Success", "https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png")
    .setTitle(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`)
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp()
    .setColor(0x0099ff)
    
    return message.channel.send(embed);
    
  }
}