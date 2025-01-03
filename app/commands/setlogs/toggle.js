const discord = require('discord.js')
const db = require('quick.db')
const c = "`"
module.exports = {
name: "toggle",
  category: "info",
  //aliases: ["setlogs"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {

     let default_prefix = '!';
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = default_prefix;

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("you are missing permissions")
    if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send("I need `ADMINISTRATOR` permissions before I can configure the toggle.")
 let status = db.get(`status_${message.guild.id}`)
 let action = db.get(`action_${message.guild.id}`)
 let days = db.get(`numDays_${message.guild.id}`)
 
    
 
 if (status === null) {
   db.set(`status_${message.guild.id}`, true)
 let embed3 = new discord.MessageEmbed()
       .setAuthor("Success", "https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png")
       .setDescription(`Alts Eliminator has been toggled to: ${c}on${c}` + `\n\n**This action was configured by <@${message.author.id}> - ${message.author.id} - ${message.author.tag}**` + "\n\n" + `**<a:info:781586085188862002> Few things to keep in mind: Bots role must be higher than members role, and the bot must has ADMINISTRATOR permissions in the guild in order to run properly.\n\n<a:info:781586085188862002> Please also make sure you have or will have configured these commands below:**` + "\n\n" + "**" + "```js" + "\n"+ `${prefix}setDays <value>\n${prefix}setAction <KICK || BAN>\n${prefix}setLogs <CHANNEL>` + "```" + "**")
       .setFooter(client.user.username, client.user.displayAvatarURL())
 .addField(`:link: | Links`, `[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)`)
                .setTimestamp()
                .setColor(0x0099ff)
       return message.channel.send(embed3)
 }
 
if(status === false) {
    db.set(`status_${message.guild.id}`, true)
     let embed2 = new discord.MessageEmbed()
       .setAuthor("Success", "https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png")
       .setDescription(`Alts Eliminator has been toggled to: ${c}on${c}` + `\n\n**This action was configured by <@${message.author.id}> - ${message.author.id} - ${message.author.tag}**` + "\n\n" + `**<a:info:781586085188862002> Few things to keep in mind: Bots role must be higher than members role, and the bot must has ADMINISTRATOR permissions in the guild in order to run properly.\n\n<a:info:781586085188862002> Please also make sure you have or will have configured these commands below:**` + "\n\n" + "**" + "```js" + "\n"+ `${prefix}setDays <value>\n${prefix}setAction <KICK || BAN>\n${prefix}setLogs <CHANNEL>` + "```" + "**")
       .setFooter(client.user.username, client.user.displayAvatarURL())
     .addField(`:link: | Links`, `[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)`)
                .setTimestamp()
                .setColor(0x0099ff)
        message.channel.send(embed2)
    return;
}
if(status === true) {
    db.set(`status_${message.guild.id}`, false)
    let embed = new discord.MessageEmbed()
       .setAuthor("Success", "https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png")
       .setDescription(`Alts Eliminator has been toggled to: ${c}off${c}` + `\n\n**This action was configured by <@${message.author.id}> - ${message.author.id} - ${message.author.tag}**` + "\n\n" + `**<a:info:781586085188862002> Few things to keep in mind: Bots role must be higher than members role, and the bot must has ADMINISTRATOR permissions in the guild in order to run properly.\n\n<a:info:781586085188862002> Please also make sure you have or will have configured these commands below:**` + "\n\n" + "**" + "```js" + "\n"+ `${prefix}setDays <value>\n${prefix}setAction <KICK || BAN>\n${prefix}setLogs <CHANNEL>` + "```" + "**")
       .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setColor(0x0099ff)
        message.channel.send(embed)
    return;
}
    } 
     }
