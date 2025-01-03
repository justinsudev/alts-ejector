const hastebin = require("hastebin-gen");
const { MessageEmbed } = require('discord.js')
let pink = 16580705
const db = require('quick.db')
const string = "Alts Terminator"
module.exports = {
name: "nopfp",
  category: "info",
  aliases: ["antipfp", "noav", "noavatar"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("missing permissions")
    const defaultAvatars = message.guild.members.cache.filter(member => !member.user.avatar).map(member => member.user.tag);
    
    if (!defaultAvatars.length) {
      message.channel.send("no default avatars")
    } else if (defaultAvatars.length >= 100)
      {
        hastebin(defaultAvatars.join("\n"))
        .then(haste => {
          let embed = new MessageEmbed()
          .setAuthor(`Requested By ${message.author.tag}`)
          .setTitle(`Found ${defaultAvatars.length} user(s) without an avatar.`)
          .setDescription(`${haste}\n[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)`)
          .setFooter(client.user.username, client.user.displayAvatarURL())
          .setTimestamp()
    .setColor(0x0099ff)
          
          message.channel.send(embed)
        })
      }
    
    
    else {
      
      
      
      hastebin(defaultAvatars.join("\n"))
        .then(haste => {
           let embed = new MessageEmbed()
    .setAuthor(`Requested By ${message.author.tag}`, message.author.displayAvatarURL())
    .setTitle(`Found ${defaultAvatars.length} user(s) without an avatar`)
    .setDescription(`\`\`\`js` + '\n' + defaultAvatars.join("\n") + `\n` + `\`\`\``)// + "\n[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=0&scope=bot)")
    .addField("List isn't full? Full list can be found below", `${haste}`)
    .addField("\n:link: | Links", "[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp()
    .setColor(0x0099ff)
    message.channel.send(embed);
        })
        .catch(e => {
            message.channel.send("Something went wrong, please try again later!");
        })

}
}
    
    }
  
