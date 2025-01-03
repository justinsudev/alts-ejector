const discord = require('discord.js')
const db = require('quick.db')

module.exports = {
name: "setaction",
  category: "info",
 // aliases: ["off"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {
    let default_prefix = '!';
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = default_prefix;


if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Missing Permission **ADMINISTRATOR**`)

        if(!args[0]) return message.channel.send(`You must state the action you would like the set.`)
    if (!args[0].toLowerCase().includes("kick") && !args[0].toLowerCase().includes("ban")) return message.channel.send(`The action provided is invalid. Avaliable actions are ` + "`" + "Kick or Ban" + "`")
        if(args[0].toLowerCase() === 'kick') {
            db.set(`action_${message.guild.id}`, 'kick')
          db.set(`status_${message.guild.id}`, true)
          let embed3 = new discord.MessageEmbed()
       .setAuthor("Success", "https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png")
       .setDescription("**The action has been successfully configured to:** " + "`" + "KICK" + "`" +`\n\n**This action was configured by: <@${message.author.id}> - ${message.author.id} - ${message.author.tag}**`+ "\n\n**<a:info:781586085188862002> Few things to keep in mind: Bots role must be higher than members role, and the bot must have KICK permissions in the guild in order to run properly.\n\n<a:info:781586085188862002> Please also make sure you have or will have configured these commands below:**" + "\n\n" + "**" + "```js" + "\n"+ `${prefix}setDays <value>\n${prefix}setAction <KICK || BAN>\n${prefix}setLogs <CHANNEL>` + "```" + "**")
       .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setColor(0x0099ff)
          .addField(`:link: | Links`, `[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)`)
       
            message.channel.send(embed3)
         // message.channel.send("**" + "```js" + "\n"+ `${prefix}setDays <value>\n${prefix}setAction <KICK || BAN>\n${prefix}setLogs <CHANNEL>` + "```" + "**")
          
        }
        if(args[0].toLowerCase() === 'ban') {
            db.set(`action_${message.guild.id}`, 'ban')
          db.set(`status_${message.guild.id}`, true)
            let embed3 = new discord.MessageEmbed()
       .setAuthor("Success", "https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png")
       .setDescription("**The action has been successfully configured to:** " + "`" + "BAN" + "`" +`\n\n**This action was configured by: <@${message.author.id}> - ${message.author.id} - ${message.author.tag}**`+ "\n\n**<a:info:781586085188862002> Few things to keep in mind: Bots role must be higher than members role, and the bot must have BAN permissions in the guild in order to run properly.\n\n<a:info:781586085188862002> Please also make sure you have or will have configured these commands below:**" + "\n\n" + "**" + "```js" + "\n"+ `${prefix}setDays <value>\n${prefix}setAction <KICK || BAN>\n${prefix}setLogs <CHANNEL>` + "```" + "**")
       .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setColor(0x0099ff)
            .addField(`:link: | Links`, `[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)`)
       
            message.channel.send(embed3)
        }
    
     }}