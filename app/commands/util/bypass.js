const discord = require('discord.js')
const db = require('quick.db')

module.exports = {
name: "bypass",
  category: "info",
  aliases: ["allow"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {

if (message.member.hasPermission("ADMINISTRATOR"))
  {
    if (message.guild.me.hasPermission("ADMINISTRATOR"))
      {
let user = message.mentions.users.first() || client.users.cache.get(args[0])
let default_prefix = '!';
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = default_prefix;

     if(!user) return message.reply(`User cannot be found. Please run ` + "`" + `${prefix}fetch <User ID>` + "`" + ` to fetch client user, then proceed to run the bypass command afterwards.`)
        
    db.set(`user_${message.guild.id}_${user.id}`, true)
        
     return message.channel.send(`${user} has been added to the bypass system`)
        
        let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

            let embed100 = new discord.MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor("#ff0000")
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setDescription(`<@${message.author.id}>` +  `has added ${user} to the bypass system.`)
                .addField("**Date**", message.createdAt.toLocaleString())
                .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed100)
      } else
        {
          message.channel.send("I am unable to function in this server because I do not have ADMINISTRATOR permissions.")
        }
  } else
    {
      message.channel.send("Missing permissions to run this command")
    }
    }

}