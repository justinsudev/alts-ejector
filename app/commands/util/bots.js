const DiscordPages = require("discord-pages");
const { MessageEmbed } = require("discord.js");
let pink = 16580705;
const db = require("quick.db");
const string = "Alts Terminator";
module.exports = {
  name: "bots",
  category: "info",
  aliases: ["botcount", "bot"],
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
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("you are missing permissions!");
    const defaultAvatars = message.guild.members.cache.filter(
      (member) => member.user.bot
    );

    const list = defaultAvatars.map(
      (m) => "<@" + m.user.id + "> - " + "**" + m.user.id + "**"
    );
    //const idList = defaultAvatars.map((m) => "**"+m.user.id+"**");
    //console.log(list);
    //console.log(list.length);
    let index = 1;
    if (list.length > 10) {
      const chunksFinal = chunkArray(list, 10);
      //const idChunksFinal = chunkArray(list, 10);
      //console.log(chunksFinal);

      const array = [];
      for (var x of chunksFinal) {
        const description = x.join("\n");
        array.push(
          new MessageEmbed()
            .setAuthor(`${message.guild.name} `, message.guild.iconURL())
            .setTitle("List of all bots in the server are shown below:")
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
        .setDescription(list.join("\n"));
      message.channel.send(embed);
    }
  },
};
