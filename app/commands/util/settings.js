const discord = require('discord.js')
const db = require('quick.db')
const {MessageEmbed} = require('discord.js')
let String = "Alts Terminator"

module.exports = {
name: "settings",
  category: "info",
  //aliases: ["setlogs"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {
   
    let days = db.get(`numDays_${message.guild.id}`)
    let logs = db.get(`modlog_${message.guild.id}`)
    let status = db.get(`status_${message.guild.id}`)
    let action = db.get(`action_${message.guild.id}`)
    let mathTotal = Math.floor(days / 86400000)
    let on = "on"
    let statuz = on
    let stats = on
    let name = `<#${logs}>`
    let actionz = ""
    
    if (logs === null) logs = "<No log channel set>"
    if (days === null) mathTotal = "<Not set>"
    //if (days === null) stats = "off"
    if (status === false) stats = "off"
    if (status === false) mathTotal = "<Toggled Off>"
    if (status === true && days !== null) stats = "on"
    if (status === true) mathTotal = mathTotal
    if (action === 'kick') actionz = "Kick"
    if (action === 'ban') actionz = "Ban"
    if (action === null) actionz = "<Not set>"
    
     if (!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== "716062999395303487") return message.reply("you are missing permissions.")
    let embed = new MessageEmbed()
    .setAuthor(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
    .setDescription("**" + `\`\`\`js` + '\n'  + "Set Days: " + mathTotal + "\n" + "Set Action: " + actionz + "\n"+ "Logs Channel ID: " + logs + "\n" + "Alts Eject Status: " + stats + `\n` + `\`\`\`` + "**" + "\n[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)")
    .setTitle("Alts Ejecting settings for " + message.guild.name)
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp()
    .setColor(0x0099ff)
    message.channel.send(embed)
       
    
    }
  }
