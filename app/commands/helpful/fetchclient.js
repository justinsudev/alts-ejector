const discord = require('discord.js')
const db = require('quick.db')

module.exports = {
name: "fetch",
  category: "info",
  //aliases: ["b", "about"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: (client, message, args) => {
    
    let default_prefix = '!';
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = default_prefix;
    let c = "`"
    
    if (message.member.hasPermission("ADMINISTRATOR")) {
    if (message.guild.me.hasPermission("ADMINISTRATOR")) {
    if (args[0]) {
      if (!isNaN(args[0])) {
        if (args[0].length == 18) {
    
    
    client.users.fetch(args[0])
          
          
    message.reply(`successfuly fetched ${c}${args[0]}${c}, you may now proceed to run ${c}${prefix}bypass ${args[0]}${c}. `)
    console.log(`fetched ${args[0]}`)
        } else {
          message.reply("Invalid ID, ID's are 18 characters in length.")
        }
    
      } else {
        message.reply("The ID must be a number.")
      }
    } else {
      message.reply("You must enter an ID to fetch.")
    }
    
    } else {
      message.reply("I need ADMINISTRATOR permissions in this server in order to function properly.")
    }
    } else {
      message.reply("Missing permissions.")
    }
  }
}