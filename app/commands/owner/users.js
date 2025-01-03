const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "users",
  alliases: ["botinvite", "inviteme"],
  category: "info",
  description: "Get bot ping :/",
  usage: "ping",
  run: (client, message) => {
    
    if (message.author.id === '716062999395303487') {
    
    let embed = new MessageEmbed()
    .setAuthor("Success", "https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png")
    .setDescription(`${client.users.cache.size} users.`)
    .addField(`:link: | Links`, `[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)`)
    .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
    .setColor(0x0099ff)
    
    message.channel.send({embed: embed})
    }
    
  }
}