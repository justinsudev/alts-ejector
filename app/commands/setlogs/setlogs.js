const db = require("quick.db")
const { MessageEmbed } = require('discord.js')
const string = "Alts Terminator"
module.exports = {
name: "setlog",
  category: "info",
  aliases: ["setlogs"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {
    
    
     let default_prefix = '!';
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = default_prefix;
        if (!message.member.hasPermission("ADMINISTRATOR")) {
         
          return message.reply("You are missing permissions.")
        }
    if (!args[0]) {
      let b = await db.fetch(`modlog_${message.guild.id}`);
      let channelName = message.guild.channels.cache.get(b);
      if (message.guild.channels.cache.has(b)) {
       
       return message.reply("bot logs are currently being logged in " + `<#${channel.id}>`)
      } else
        return message.reply(
          "you need to input the channel name or ID to set!"
        );
    }
        let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!channel || channel.type !== 'text') {
          
          
          message.reply("you didn't mention a channel, or the channel type isnt a `text channel`.");
        }

        try {
            let a = await db.fetch(`modlog_${message.guild.id}`)

            if (channel.id === a) {
                
                
                return message.reply(`this channel is already set as the current modlog channel.`)
            } else {
              let embed4 = new MessageEmbed()
       .setAuthor("Success", "https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png")
       .setDescription(`Bot logs have been successfully set to this channel, which is <#${channel.id}>. All of the kicking, bypassing, and banning of users/alts will all be logged to this channel.` + `\n\n**This action was configured by <@${message.author.id}> - ${message.author.id} - ${message.author.tag}**` + "\n\n" + `**<a:info:781586085188862002> Few things to keep in mind: Bots role must be higher than members role, and the bot must has ADMINISTRATOR permissions in the guild in order to run properly.\n\n<a:info:781586085188862002> Please also make sure you have or will have configured these commands below:**` + "\n\n" + "**" + "```js" + "\n"+ `${prefix}setDays <value>\n${prefix}setAction <KICK || BAN>\n${prefix}setLogs <CHANNEL>` + "```" + "**")
       .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setColor(0x0099ff)
                client.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send(embed4)
                db.set(`modlog_${message.guild.id}`, channel.id)

                let embed3 = new MessageEmbed()
       .setAuthor("Success", "https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png")
       .setDescription(`Bot logs have been successfully set to <#${channel.id}>` + `\n\n**This action was configured by <@${message.author.id}> - ${message.author.id} - ${message.author.tag}**` + "\n\n" + `**<a:info:781586085188862002> Few things to keep in mind: Bots role must be higher than members role, and the bot must has ADMINISTRATOR permissions in the guild in order to run properly.\n\n<a:info:781586085188862002> Please also make sure you have or will have configured these commands below:**` + "\n\n" + "**" + "```js" + "\n"+ `${prefix}setDays <value>\n${prefix}setAction <KICK || BAN>\n${prefix}setLogs <CHANNEL>` + "```" + "**")
       .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setColor(0x0099ff) 
       return message.channel.send(embed3)
            }
        } catch {
            return message.channel.send("```js\nthrow err: Channel is invalid or permissions of AMINISTRATOR are missing```");
        }
    }
};