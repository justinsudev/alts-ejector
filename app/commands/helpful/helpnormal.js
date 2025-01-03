const discord = require('discord.js')
let String = "Alts Terminator"
const db = require('quick.db')

module.exports = {
name: "help",
  category: "info",
  //aliases: ["b", "about"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {
    let inv1 = ""
   let inv =  client.generateInvite({
  permissions: ['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'],
}).then(link => link = inv1)
let default_prefix = '!';
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = default_prefix;
    let c = "`"
const exampleEmbed = {
	color: 0x0099ff,
	title: client.user.username + " help",
	//url: 'https://discord.js.org',
	author: {
		name: `Requested by ${message.author.tag}`,
		icon_url: message.author.displayAvatarURL(),
		url: message.author.displayAvatarURL(),
	},
	description: "**" + `__WELCOMER:__\n\n${c}${prefix}setWelcome${c} / ${c}${prefix}setLeave${c} - sets the welcomer/leaver image to a given channel in the guild.\n\n${c}${prefix}removeWelcome${c} / ${c}${prefix}removeLeave${c} - removes the welcomer/leaver image from the channel in the guild.\n\n__CONFIGURATION:__\n \n${c}${prefix}prefix${c} - sets the bot prefix in the guild.\n\n${c}${prefix}setup${c} - shows you how to setup the bot.\n\n${c}${prefix}setLogs${c} - sets the logging channel in the guild.\n\n${c}${prefix}setDays${c} - sets the number of days younger than to kick/ban.\n\n${c}${prefix}removeLogs${c} - removes the bot logging channel in the guild.\n\n${c}${prefix}settings${c} - shows the current set settings for the bot.\n\n${c}${prefix}reset${c} - resets the alts ejecter settings in the guild.\n\n${c}${prefix}toggle${c} - toggles the alts ejecter to on/off\n \n__BYPASSING__:\n \n${c}${prefix}bypass${c} - allows the mentioned user to join the server even when the status is on\n\n${c}${prefix}unbypass${c} - removes the user from the bypass system.\n\n${c}${prefix}bypassed${c} - shows the list of users on the bypass system.\n \n__UTILITIES__:\n \n${c}${prefix}noPfp${c} - shows all the members in the guild without an avatar\n\n${c}${prefix}discrim${c} - shows all users in the guild with a certain discrim\n\n${c}${prefix}bots${c} - shows all the bots in the guild.\n\n${c}${prefix}names${c} - shows all users in the server with a certain name.\n\n${c}${prefix}showAlts${c} - shows all the alts in the server under the set days.\n\n${c}${prefix}ageCheck${c} - checks the mentioned users account age.\n\n${c}${prefix}bannedAlts${c} - shows all the alts that have been banned by the bot.` + "**",
	thumbnail: {
		url: null,
	}, 
  fields: [
    {
      name: ":link: | Links",
      value: "[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)"
    }
  ],
	
	timestamp: new Date(),
	footer: {
		text: client.user.username,
		icon_url: client.user.displayAvatarURL(),
	},
};

message.channel.send({ embed: exampleEmbed });
  }
}

