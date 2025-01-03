const db = require("quick.db")
const { default_prefix } = require("../../config.json")
const Canvas = require("canvas")
const discord = require('discord.js')
module.exports = {
  name: "prefix",
  category: "moderation",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  run: async (client, message, args) => {
    //PERMISSION
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("You are missing the `ADMINISTRATOR` permissions for this guild to execute this command.")
    }
    
    if(!args[0]) {
      return message.channel.send("Please give the prefix that you want to set\n`Correct usage is: " + prefix + "prefix <value>`")
    } 
    
    if(args[1]) {
      return message.channel.send("You can not set prefix a double argument\n`Correct usage is: " + prefix + "prefix <value>`")
    }
    
    if(args[0].length > 3) {
      return message.channel.send("You can not send prefix more than 3 characters\n`Correct usage is: " + prefix + "prefix <value>`")
    }
    
    if(args.join("") === default_prefix) {
      db.delete(`prefix_${message.guild.id}`)
     return await message.channel.send("Set The Bot Prefix to: `!`")
    }
    let c = "`"
    
    db.set(`prefix_${message.guild.id}`, args[0])
  await message.channel.send(`Set The Bot Prefix to: ${c}${args[0]}${c}`)
    
  }
}

