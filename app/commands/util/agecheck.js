const discord = require('discord.js')
const moment = require('moment')
const string = "Alts Terminator"
module.exports = {
name: "agecheck",
  category: "info",
  aliases: ["age"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you are missing permissions!")
  if (!member) return message.reply("you must mention a user to check the age of.") 
    var embed = new discord.MessageEmbed()
    .setAuthor(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
    .addField("Name", member.user.tag)
    .addField("Created Ago", `${moment(member.user.createdTimestamp).fromNow()}`)
    .addField("Created Date", new Date( message.author.createdAt).toLocaleDateString())
    .addField("Created Time", member.user.createdAt)
    .addField(`:link: | Links`, `[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)`)
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp()
    .setColor(0x0099ff)
    
    message.channel.send(embed);
  


  }
  
}

  