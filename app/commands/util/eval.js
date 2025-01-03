const { MessageEmbed } = require('discord.js')

module.exports = {
name: "eval",
  category: "info",
  //aliases: ["kitsu"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: (client, message, args) => {
        function clean(text) {
            if (typeof text === "string")
                return text
                    .replace(/`/g, "`" + String.fromCharCode(8203))
                    .replace(/@/g, "@" + String.fromCharCode(8203));
            else return text;
        }
        let owner = '716062999395303487'

        if (!owner.includes(message.author.id)) return;

        try {
            const code = args.join(" ");
            let evaled = eval(code);

            if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

            message.react("✅");
            
            message.channel.send(`\`\`\`js` + '\n' + clean(evaled) + `\n` + `\`\`\``);
        } catch (err) {
            message.react("⚠");
            
            message.channel.send(`\`\`\`js` + '\n' + clean(err) + `\n` + `\`\`\``);
        }
    }
}