const db = require('quick.db');
const string = "Alts Terminator"
const { MessageEmbed } = require('discord.js')
module.exports = {
name: "deletelog",
  category: "info",
  aliases: ["removelogs"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
        
          return message.reply("you are missing permissions.")
        }

        try {
            let a = db.fetch(`modlog_${message.guild.id}`)

            if (!a) {
                return message.reply('no log channel has been found to be set.')
            } else {
                let channel = message.guild.channels.cache.get(a)
                client.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**Logging Channel Disabled**")
                db.delete(`modlog_${message.guild.id}`)

                let embed3 = new MessageEmbed()
       .setAuthor("Success", "https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png")
       .setDescription(`Bot logs have been successfully removed from <#${channel.id}>`)
       .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .addField(`:link: | Links`, `[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)`)
       return message.channel.send(embed3)
            }
            return;
        } catch {
            return message.channel.send("```Throw err: Channel is invalid or permissions of AMINISTRATOR are missing```");
        }
    }
}