const Discord = require("discord.js")
const db = require("quick.db")
let String = "Alts Terminator"
module.exports = {
  name: "removewelcome",
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",
  run: (client, message, args) => {
    
   if (message.member.hasPermission("ADMINISTRATOR"))
     {
    
   
    
    //Now we gonna use quick.db
    
    db.delete(`welchannel_${message.guild.id}`)
    
    let embed3 = new Discord.MessageEmbed()
       .setAuthor("Success", "https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png")
       .setDescription(`Welcome channel successfully removed!\n\n[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)`)
       .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
    .setColor(0x0099ff)
       message.channel.send(embed3)
     } else {
       message.channel.send("you are missing permissions")
     }
  }
}