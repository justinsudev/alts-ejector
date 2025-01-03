const discord = require('discord.js')
let String = "Alts Terminator"
const db = require('quick.db')
module.exports = {
name: "setup",
  category: "info",
  //aliases: ["setlogs"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {
    let default_prefix = '!';
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = default_prefix;
    
    let embed = new discord.MessageEmbed()
    .setAuthor(`Requested By ${message.author.tag}`, message.author.displayAvatarURL())
    .setTitle("Proper Use Information")
    .setDescription("**" + `\`\`\`js` + '\n'  + `✅ Instructions For Setup (Read Properly)\n \n✅ #1 - [ ${prefix}setDays <value> ] will set the number of days younger than for the bot to kick/ban.\n \n✅ #2 - [ ${prefix}setAction <Ban || Kick> ] will set the action for detected alts joining.\n \n✅ #3 - [ ${prefix}setLogs <#channel> ] will set the logs of all actions made from the bot.\n \n \n✅ Bot will then start kicking & logging actions! If any of these are not set the bot will not function properly. Bot will also need ADMINISTRATOR permissions to function properly in the server.\n \n✅ IMPORTANT: Bots role must be higher than members role, bot must have ADMINISTRATOR permissions in guild settings.\n\n✅ AFTER SETUP: After setup you may run ${prefix}settings to view if setup has been properly done. Enjoy!` + `\n` + `\`\`\`` + "**" + "\n" + "[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp()
    .setColor(0x0099ff)
    message.channel.send(embed);
  }
}