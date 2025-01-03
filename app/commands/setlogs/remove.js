const discord = require('discord.js')
const db = require('quick.db')
let String = "Alts Terminator"
module.exports = {
name: "reset",
  category: "info",
  aliases: ["resetsettings"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {
    
    let default_prefix = '!';
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = default_prefix;
    let c = "`"
 if (message.member.hasPermission("ADMINISTRATOR")) {
   db.delete(`numDays_${message.guild.id}`)
   db.set(`status_${message.guild.id}`, false)
   db.delete(`modlog_${message.guild.id}`)
   db.delete(`action_${message.guild.id}`)
   
   
   let embed3 = new discord.MessageEmbed()
       .setAuthor("Success", "https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png")
       .setDescription(`**Settings for the bot have been successfully reset. You may run ${c}${prefix}settings${c} to view the settings.**` + `\n\n**This action was configured by <@${message.author.id}> - ${message.author.id} - ${message.author.tag}**` + "\n\n" + `**<a:info:781586085188862002> Few things to keep in mind: Bots role must be higher than members role, and the bot must has ADMINISTRATOR permissions in the guild in order to run properly.\n\n<a:info:781586085188862002> The following below have been reset to the original non set values. Please make sure everything is set up again in order to configure the settings correctly.**` + "\n\n" + "**" + "```js" + "\n"+ `${prefix}setDays <Not set>\n${prefix}setAction <Not set>\n${prefix}setLogs <Not setL>` + "```" + "**")
       .setFooter(client.user.username, client.user.displayAvatarURL())
   .addField(`:link: | Links`, `[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)`)
                .setTimestamp()
                .setColor(0x0099ff)
       return message.channel.send(embed3)
 }

  }
}