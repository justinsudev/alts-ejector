const hastebin = require("hastebin-gen");
const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const string = "Alts Terminator"
module.exports = {
name: "names",
  category: "info",
  //aliases: [""],
  description: "fetches user discriminators with given arguments (args)",
  usage: "!discrim <4 numbers for a discrim lol>",
  run: (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you are missing permissions!")
    const query = args[0];
    if (!query) return message.channel.send("Please include a name!");

    const users = message.guild.members.cache.filter(member => member.user.username.toLowerCase() === query.toLowerCase()).map(member => member.user.tag);
    if (!users.length) return message.channel.send(`No users found with name **${query}**!`);
    
    if (users.length >= 100)
      {
        hastebin(users.join("\n"))
        .then(haste => {
          let embed = new MessageEmbed()
          .setAuthor(`Requested By ${message.author.tag}`)
          .setTitle(`Found ${users.length} user(s) who have the username ${query}.`)
          .setDescription(`${haste}`)
          .addField(`:link: | Links`, `[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)`)
          .setFooter(client.user.username, client.user.displayAvatarURL())
          .setTimestamp()
    .setColor(0x0099ff)
          message.channel.send(embed)
        })
      } else {

    hastebin(users.join("\n"))
        .then(haste => {
            let embed = new MessageEmbed()
    .setAuthor(`Requested By ${message.author.tag}`, message.author.displayAvatarURL())
    .setTitle(`Found ${users.length} user(s) who has the display name ${query}`)
    .setDescription(`\`\`\`js` + '\n' + users.join("\n") + `\n` + `\`\`\``)// + "\n[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=0&scope=bot)")
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
    
    

  

