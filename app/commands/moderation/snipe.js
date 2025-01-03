const Discord = require('discord.js')
module.exports = {
  name: "snipe",
  run: (client, message) => {
        const msg = client.snipes.get(message.channel.id)
        if(!msg)return message.channel.send("Theres nothing to snipe fat fuck!")
        const embed6 = new Discord.MessageEmbed()
        .setAuthor(msg.author, message.author.displayAvatarURL())
        .setDescription(msg.content)
        .setFooter("justin is the best")
        .setTimestamp()
        if (msg.image) embed6.setImage(msg.image)
        message.channel.send(embed6)
    }
}