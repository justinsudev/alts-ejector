const discord = require('discord.js')
const db = require('quick.db')

module.exports = {
name: "unbypass",
  category: "info",
  aliases: ["disallow"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {

if (message.member.hasPermission("ADMINISTRATOR"))
  {
    if (message.guild.me.hasPermission("ADMINISTRATOR"))
      {
const user = message.mentions.users.first() || client.users.cache.get(args[0])
     if(!user) return message.channel.send(`You didnt provide the user by mention/ID or I couldn't find the user.`)
        
     db.delete(`user_${message.guild.id}_${user.id}`)
     return message.channel.send(`${user} has been removed from the bypass system`)
        
        
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