const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const hastebin = require('hastebin-gen')
let pink = 16580705
const string = "Alts Terminator"
module.exports = {
name: "showalts",
  category: "info",
  //aliases: ["kitsu"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: (client, message, args) => {
    let default_prefix = '!';
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = default_prefix;
   // if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you are missing permissions!")
    if (!args.length) {
      message.reply("you need to enter the number of days to set!\n`Correct usage is: " + prefix + "showalts <value>`")
    } else if (isNaN(args)) {
      message.channel.send('You must provide a number!')
    } else {
      
      let fetch = message.guild.members.cache.filter(member => Date.now() - member.user.createdAt < 1000*60*60*24* + args).map(member => member.user.tag)
      
   if (!fetch.length) {
      message.channel.send("No users were created less than " + args + " days ago")
    } else if (fetch.length >= 100) {
      hastebin(fetch.join("\n"))
        .then(haste => {
          let embed = new MessageEmbed()
          .setAuthor(`Requested By ${message.author.tag}`)
          .setTitle(`Found ${fetch.length} user(s) who were created less than ${args} day(s) ago.`)
          .setDescription(`${haste}`)
          .addField(`:link: | Links`, `[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)`)
          .setFooter(client.user.username, client.user.displayAvatarURL())
          .setTimestamp()
    .setColor(0x0099ff)
          
          message.channel.send(embed)
        })
    } else {
      hastebin(fetch.join("\n"))
        .then(haste => {
           let embed = new MessageEmbed()
    .setAuthor(`Requested By ${message.author.tag}`, message.author.displayAvatarURL())
    .setTitle(`Found ${fetch.length} user(s) who were created less than ` + args + " days ago")
    .setDescription(`\`\`\`js` + '\n' + fetch.join("\n") + `\n` + `\`\`\``) //+ "\n[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=0&scope=bot)")
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
}