const discord = require('discord.js')
let String = "Alts Terminator"
const db = require('quick.db')
//const link = require('./invite.json')
module.exports = {
name: "help-static",
  category: "info",
  //aliases: ["b", "about"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {
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
	description: "**" + `\`\`\`js` + '\n' + `__WELCOMER:__\n\n${prefix}setWelcome / ${prefix}setLeave - sets the welcomer/leaver image to a given channel in the guild.\n\n${prefix}removeWelcome / ${prefix}removeLeave - removes the welcomer/leaver image from the channel in the guild.\n\n__CONFIGURATION:__\n \n${prefix}prefix - sets the bot prefix in the guild.\n\n${prefix}setup - shows you how to setup the bot.\n\n${prefix}setLogs - sets the logging channel in the guild.\n\n${prefix}setDays - sets the number of days younger than to kick.\n\n${prefix}removeLogs - removes the bot logging channel in the guild.\n\n${prefix}settings - shows the current set settings for the bot.\n\n${prefix}off - turns the alts kicker off in the guild.\n \n__BYPASSING SYSTEM__:\n \n${prefix}bypass - allows the mentioned user to join the server even if his/her account is under the set days while the alts ejecting is on\n\n\n \n__UTILITIES__:\n \n${prefix}noPfp - shows all the members in the guild without an avatar\n\n${prefix}discrim - shows all users in the guild with a certain discriminator\n\n${prefix}bots - shows all the bots in the guild.\n\n${prefix}names - shows all users in the server with a certain name.\n\n${prefix}showAlts - shows all the alts in the server under the set days\n\n${prefix}ageCheck - checks the mentioned users account age.\n\n${prefix}bannedAlts - shows all the alts that have been banned by the bot.\n\n${prefix}bypass - allows the user to join while the alts kicking/banning is active\n\n${prefix}unbypass - disallow a user to join the server when the alts kicking/banning is on.\n\n${prefix}bypassed - shows the list of users that have been bypassed.` + `\n \n` + `\n` + `\`\`\`` + "**",
	thumbnail: {
		url: client.user.displayAvatarURL(),
	},
	
	timestamp: new Date(),
	footer: {
		text: client.user.username,
		icon_url: client.user.displayAvatarURL(),
	},
};

message.channel.send({ embed: exampleEmbed });
  }
}

