const discord = require("discord.js");
const db = require("quick.db");
const hastebin = require("hastebin-gen");
module.exports = {
  name: "bypassed",
  category: "info",
  aliases: ["allowed"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: async (client, message, args) => {
    let bannded = db
      .all()
      .filter((data) => data.ID.startsWith(`user_${message.guild.id}`))
      .sort((a, b) => b.data - a.data);
    console.log(bannded);
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(`Missing Permission **ADMINISTRATOR**`);

    if (!bannded.length)
      return message.channel.send(`No users were found in the bypass system.`);

    let arr = [];
    if (bannded && bannded.length) {
      bannded.forEach((users) => {
        arr.push(users.ID.split(`user_${message.guild.id}_`)[1]);
      });
      if (bannded.length >= 100) {
        hastebin(arr.join("\n")).then((haste) => {
          let embed = new discord.MessageEmbed()
            .setAuthor(`Requested By ${message.author.tag}`)
            .setTitle(
              `Found ${bannded.length} user(s) ID(s) who are on the allowed list`
            )
            .setDescription(`${haste}`)
            .addField(
              `:link: | Links`,
              `[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=8&scope=bot)`
            )
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setColor(0x0099ff)
            .setTimestamp();
          message.channel.send(embed);
        });
      } else {
        let arr = [];
        if (bannded && bannded.length) {
          bannded.forEach((users) => {
            arr.push(
              "<@" +
                users.ID.split(`user_${message.guild.id}_`)[1] +
                ">" +
                " - " +
                "`" +
                users.ID.split(`user_${message.guild.id}_`)[1] +
                "`"
            );
          });
          if (arr.length === 0) return message.channel.send(`Empty-`);

          let embed = new discord.MessageEmbed()
            .setAuthor(
              `Requested by ${message.author.tag}`,
              message.author.displayAvatarURL()
            )
            .setTitle(`Found ${bannded.length} user(s) on the allowed section`)
            .setDescription(arr)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setColor(0x0099ff)
            .addField(
              "\n:link: | Links",
              "[Invite Me](https://discord.com/api/oauth2/authorize?client_id=752668737181712420&permissions=0&scope=bot)"
            );
          return message.channel.send(embed);
        }
      }
    }
  },
};
