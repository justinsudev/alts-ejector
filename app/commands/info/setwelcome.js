const Discord = require("discord.js")
const db = require("quick.db")
let String = "Alts Terminator"
module.exports = {
  name: "setwelcome",
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",
  run: (client, message, args) => {
    
    let channel = message.mentions.channels.first()
    if (message.member.hasPermission("ADMINISTRATOR"))
      {
    if(!channel) {
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    let embed3 = new Discord.MessageEmbed()
       .setAuthor("Success", "https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png")
       .setDescription(`Welcome channel successfully set to ${channel}\n\n[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)`)
       .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
    .setColor(0x0099ff)
       message.channel.send(embed3)
      } else {
       message.channel.send("you are missing permissions")
     }
  }
}