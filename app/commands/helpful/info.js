const discord = require('discord.js')
let String = "Alts Terminator"

module.exports = {
name: "info",
  category: "info",
  aliases: ["botinfo", "about"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {
let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
    const exampleEmbed = {
	color: 0x0099ff,
	title: client.user.username + " Information(s)",
	//url: 'https://discord.js.org',
	author: {
		name: `Requested by ${message.author.tag}`,
		icon_url: message.author.displayAvatarURL(),
		url: client.user.displayAvatarURL(),
	},
	description: "**" + client.user.username + ", a powerful Discord Alts Eliminator Bot.**" + "\n \n" + "**" + `\`\`\`js` + '\n'  + "Bot Developer: Completly developed by Disturbance#1337\n \nPlatform: Node.js 12.x => Discord.js v12.4.1 (Stable)\n \nClient Username: " + client.user.username + "#2935" + `\n \nClient Uptime: \n${days} days ${hours} hours ${minutes} minutes ${seconds} seconds` + `\n \nClient Ping:\n${client.ws.ping} ms` + `\n` + `\`\`\`` + "**",
	thumbnail: {
		url: client.user.displayAvatarURL(),
	},
	fields: [
		/*{
			name: 'Creation and Platform info(s)',
			value: 'test'//"**" + `\`\`\`js` + '\n'  + "Bot Developer: Completly developed by Disturbance#1337\n \nPlatform: Node.js 12.x => Discord.js v12.4.1 (Stable)\n \nClient Username: " + String + "#2935" + `\n \nClient Uptime: \n${days} days ${hours} hours ${minutes} minutes ${seconds} seconds` + `\n` + `\`\`\`` + "**"
		},*/
		{
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
		{
			name: 'Created At',
			value: "**" + client.user.createdAt + "**",
			inline: true,
		},
		
		{
			name: 'Project Base',
			value: '**Visual Studio Code\nInsiders Edition\nNode => 12.x**',
			inline: true,
		},
    {
      name: ":link: | Links",
      value: "[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)",
      inline: false,
    },
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
