const discord = require('discord.js')
const db = require('quick.db')

module.exports = {
name: "setdays",
  category: "info",
  //aliases: ["setlogs"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {
    let default_prefix = '!';
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = default_prefix;
    let action = db.get(`action_${message.guild.id}`)
    
    
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      message.reply("you are missing permissions.")
    } else if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
      message.reply("I need `ADMINISTRATOR` permissions before I can configure the days.")
    } else if (!args.length) {
      message.reply("you need to enter the number of days to set!\n`Correct usage is: " + prefix + "setdays <value>`")
    } else if (args <= 0) {
      message.reply(`The number of days must be 1 or higher.`)
    } else if (isNaN(args)) {
      message.reply('You must provide a number!')
    } else {
      db.set(`numDays_${message.guild.id}`, 1000*60*60*24* + args )
      
      let embed = new discord.MessageEmbed()
       .setAuthor("Success", "https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png")
      .setDescription("**The number of days has been set to: ** " + "`" + args + "`" + `\n\n**This action was configured by <@${message.author.id}> - ${message.author.id} - ${message.author.tag}**` + "\n\n" + `**<a:info:781586085188862002> Few things to keep in mind: Bots role must be higher than members role, and the bot must has ADMINISTRATOR permissions in the guild in order to run properly.\n\n<a:info:781586085188862002> Please also make sure you have or will have configured these commands below:**` + "\n\n" + "**" + "```js" + "\n"+ `${prefix}setDays <value>\n${prefix}setAction <KICK || BAN>\n${prefix}setLogs <CHANNEL>` + "```" + "**")
                .setFooter(client.user.username, client.user.displayAvatarURL())
      .addField(`:link: | Links`, `[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)`)
                .setTimestamp()
          .setColor(0x0099ff)
    
      message.channel.send(embed)
    }

    
  }
  
}