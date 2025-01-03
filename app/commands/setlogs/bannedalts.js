const DiscordPages = require("discord-pages");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
let String = "Alts Terminator";

module.exports = {
  name: "bannedalts",
  category: "info",
  //aliases: ["off"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {
    function chunkArray(array, size) {
      let result = [];
      for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size);
        result.push(chunk);
      }
      return result;
    }
    let membersBanned = await db.get(`banned_${message.guild.id}`);
    // console.log(membersBanned);
    if (!membersBanned)
      return message.reply("No users found have been banned by the bot.");
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("Missing permissions.");
    if (!message.guild.me.hasPermission("ADMINISTRATOR"))
      return message.reply(
        "I need ADMINISTRATOR permissions before I can function properly."
      );
    let banned = [];

    //let lines = banned.split(/\r\n|\r|\n/);
    //console.log(lines);
    membersBanned.forEach((user) => {
      banned.push(
        "`" +
          `${user.user}` +
          "`" +
          " - " +
          "`" +
          `${user.ID}` +
          "`" +
          " - " +
          "`" +
          `Created ${user.created}` +
          "`" +
          "\n"
      );
    });
    console.log(banned);
    if (membersBanned.length > 10) {
      if (banned.length > 10) {
        const chunksFinal = chunkArray(banned, 10);
        //const idChunksFinal = chunkArray(list, 10);
        //console.log(chunksFinal);

        const array = [];
        for (var x of chunksFinal) {
          const description = x.join("\n");
          array.push(
            new MessageEmbed()
              .setAuthor(`${message.guild.name} `, message.guild.iconURL())
              .setTitle(
                `I found __${banned.length}__ users whom have been banned by the bot.`
              )
              .setDescription(description)
              .setColor(0x0099ff)
              .setFooter(client.user.username, client.user.displayAvatarURL())
          );
          //console.log("this is arry of embeds" + array);
        }
        const embedPages = new DiscordPages({
          pages: array,
          channel: message.channel,
          duration: 120000,
        });
        embedPages.createPages();
      } else {
        let embed = new MessageEmbed()
          .setTitle("List")
          .setDescription(banned.join("\n"));
        message.channel.send(embed);
      }
    }
  },
};
