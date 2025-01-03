const discord = require('discord.js')

module.exports = {
  name: "nuke",
  aliases: ["nuke"],
  category: "fun",
  description: "Shows jail comment",
  usage: "jail <@user>",
  run: async (client, message, args) => {
    
    if (message.member.permissions.has("MANAGE_CHANNELS")) {
      
    
    let channel = client.channels.cache.get(message.channel.id)
    let pos = channel.position;
      
      channel.send("<a:Loading:767757817280331786> | Please wait...")
    
    channel.clone().then(channel2 => {
      
      channel2.setPosition(pos)
      channel.delete()
      channel2.send("<:30171yummy:944644513966739476>  | Channel Successfully nuked by Alts Ejecter ! https://th.bing.com/th/id/R.1b528aef8b845bb71ff0fac82768541d?rik=J5PH0ND1M6sycQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-iYl5L6jFjIg%2fUopL3Z_d1YI%2fAAAAAAAAEl4%2fcTIAh6kozqU%2fs1600%2fatomic-bomb-blast-explosion-trollface-troll-face.gif&ehk=wCCtEb1%2b2Ma5GVT9RleVKxBrLX7CzdJTAaF%2fw5ZWh6o%3d&risl=&pid=ImgRaw&r=0")
      
    })
    } else {
      message.reply("Error!: `You are missing MANAGE_CHANNELS permissions`")
    }
  }
}