const { default_prefix } = require("./config.json")
const { config } = require("dotenv");
const discord = require("discord.js") //Gonna use Discord.js Module xD
const moment = require('moment')
const Canvas = require('canvas')
const client = new discord.Client({
  disableEveryone: true, // what does this disable thing do?
  fetchAllMembers: true
});
const db = require("quick.db") //WE WILL BE USING QUICK.DB
const { addexp } = require("./handlers/xp.js")
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;
	do {
		ctx.font = `${fontSize -= 10}px arial`;
	} while (ctx.measureText(text).width > canvas.width - 300);
	return ctx.font;
};


["command"].forEach(handler => { 
  require(`./handlers/${handler}`)(client)
})



client.on("ready", () => { //When bot is ready
  console.log("I am Reday to Go")
  client.user.setActivity("@Alts Ejecter#2935 for help!")
  //client.user.setStatus("idle")//It will set status :)
})

client.on("message", async message => {
  
if(message.author.bot) return;
  if(!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = default_prefix;
  
  if(!message.content.startsWith(prefix)) return;
  
     if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);
  
return addexp(message)

 }) //All codes link in description

//GONNA USE EVENT HERE

client.on("guildMemberAdd", async (member) => {
  let chx = db.get(`welchannel_${member.guild.id}`);
  
  if(chx === null) {
    return;
  }
const Canvacord = require('canvacord')
const image = new Canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setMemberCount(member.guild.memberCount)
  .setGuildName(member.guild.name)
  .setAvatar(member.user.displayAvatarURL({ format: "jpg", size: 1024 }))
  .setColor("border", "#00FF00")
  .setColor("username-box", "#00FF00")
  .setColor("discriminator-box", "#00FF00")
  .setColor("message-box", "#00FF00")
  .setColor("title", "#00FF00")
  .setColor("avatar", "#00FF00")
  .setBackground("https://wallpapercave.com/wp/wp10927528.jpg")

image.build()
  .then(data => {
    client.channels.cache.get(chx).send(new discord.MessageAttachment(data, 'welcome-image.png'))
  })
})
  
  
client.on("guildMemberRemove", async (member) => {
  let chx1 = db.get(`leavechannel_${member.guild.id}`);
  
  if(chx1 === null) {
    return;
  }
const Canvacord = require('canvacord')
const image = new Canvacord.Leaver()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setMemberCount(member.guild.memberCount)
  .setGuildName(member.guild.name)
  .setAvatar(member.user.displayAvatarURL({ format: "jpg", size: 1024 }))
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground("https://wallpapercave.com/wp/wp4726127.jpg")

image.build()
  .then(data => {
    client.channels.cache.get(chx1).send(new discord.MessageAttachment(data, 'leaver-image.png'))
  })
 



  
  //client.channels.cache.get(chx).send(attachment)
})

client.on("guildMemberAdd", async (member) => {
  let days = db.get(`numDays_${member.guild.id}`);
  let bypass = db.get(`user_${member.guild.id}_${member.id}`);
  let action = db.get(`action_${member.guild.id}`);
  let status = db.get(`status_${member.guild.id}`)
  //let bypassed = db.fetch(`allow_${member.id}_${member.guild.id}`)
  	/*const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage('https://wallpapercave.com/uwp/uwp234459.jpeg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	ctx.strokeStyle = '#ff6d08';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// 🎨 Creates canvas font settings and text style.
	ctx.font = '45px arial';
	ctx.fillStyle = 'pink';
	ctx.fillText(`${member.user.tag} `, canvas.width / 3.6, canvas.height / 2.3);
	ctx.font = applyText(canvas, `${member.user}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Joined because he is bypassed!', canvas.width / 9.5, canvas.height / 1.12);

	// 🎨 Adds a canvas image using guild member's avatar with pathing.
	ctx.beginPath();
	ctx.arc(100, 100, 75, 0, Math.PI * 2, true);
  ctx.lineWidh = 100;
  ctx.strokeStyle = '#ffffff'
  ctx.stroke();
	ctx.closePath();
	ctx.clip();
	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25.5, 25.5, 150, 150);

	// 🎨 Creates a new Discord message attachment using canvas.
	const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'hello-image.png');*/
  

  if(!status) status = false;
     if(status === false) return;
  
  
  if (days === null) {
    return;
 
  
  } 
  if (status === true) {
    if (action === 'kick') {
    if (bypass === true) {
    let channel = db.fetch(`modlog_${member.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

            let embed100 = new discord.MessageEmbed()
                .setAuthor(`${member.guild.name} Modlogs`, 'https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png')
                .setColor(0x0099ff)
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setDescription(`<@${member.user.id}> - ${member.user.tag} - ${member.user.id} ` + "**has been joined because the account has been bypassed!**")
                .addField("**Joined Date**", member.joinedAt.toLocaleString(), true)
                .addField("**Created Ago**", `${moment(member.user.createdTimestamp).fromNow()}`)
                .addField("**Created Date**", new Date(member.user.createdAt).toLocaleDateString())
            //.setImage('attachment://hello-image.png')
                .setTimestamp();


            var sChannel = member.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send({ /*files: [attachment], */embed: embed100 })
    return;
  } 
    
      
      
    
    else {
      
      
    if (Date.now() - member.user.createdAt < days) {
      member.kick()
      member.user.send(`You were kicked in ${member.guild.name} because your account was too young!`)
      let channel = db.fetch(`modlog_${member.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

            let embed100 = new discord.MessageEmbed()
                .setAuthor(`${member.guild.name} Modlogs`, 'https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png')
                .setColor(16580705)
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setDescription(`<@${member.user.id}> - ${member.user.tag} - ${member.user.id} ` + "**has been kicked because the account was too young!**")
                .addField("**Attempted Joined Date**", member.joinedAt.toLocaleString(), true)
                .addField("**Created Ago**", `${moment(member.user.createdTimestamp).fromNow()}`, true)
                .addField("**Created Date**", new Date(member.user.createdAt).toLocaleDateString(), true)
            //.setImage('attachment1://hello-image.png')
                .setTimestamp();

            var sChannel = member.guild.channels.cache.get(channel)
            if (!sChannel) return;
             sChannel.send({/* files: [attachment1],*/ embed: embed100 })
    }
  }

    }
  } 
  }
          
)

client.on("guildMemberAdd", async (member) => {
  let days = db.get(`numDays_${member.guild.id}`);
  let bypass = db.get(`user_${member.guild.id}_${member.id}`);
  let action = db.get(`action_${member.guild.id}`);
  let status = db.get(`status_${member.guild.id}`);
  //let bypassed = db.fetch(`allow_${member.id}_${member.guild.id}`)
  if(!status) status = false;
  if(status === false) return;
 
  
  if (days === null) {
    
    return;
    
  }
   if (status === true) {
 if (action === 'ban') {
  
  if (bypass === true) {
    let channel = db.fetch(`modlog_${member.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

            let embed100 = new discord.MessageEmbed()
                .setAuthor(`${member.guild.name} Modlogs`, 'https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png')
                .setColor(0x0099ff)
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setDescription(`<@${member.user.id}> - ${member.user.tag} - ${member.user.id} ` + "**has been joined because the account has been bypassed!**")
                .addField("**Joined Date**", member.joinedAt.toLocaleString(), true)
                .addField("**Created Ago**", `${moment(member.user.createdTimestamp).fromNow()}`, true)
                .addField("**Created Date**", new Date(member.user.createdAt).toLocaleDateString(), true)
                .setTimestamp();

            var sChannel = member.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed100)
    return;
  } 
    
    else {
    if (Date.now() - member.user.createdAt < days) {
      member.ban()
      let data = {
        user: member.user.tag,
        ID: member.user.id,
        created: `${moment(member.user.createdTimestamp).fromNow()}`
      }
      console.log(data)
      db.push(`banned_${member.guild.id}`, data)
      member.user.send(`You were banned in ${member.guild.name} because your account was too young!`)
      let channel = db.fetch(`modlog_${member.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

            let embed100 = new discord.MessageEmbed()
                .setAuthor(`${member.guild.name} Modlogs`, 'https://media.discordapp.net/attachments/760163394677506048/764202511460466698/717382820363763852_1.png')
                .setColor(16580705)
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setDescription(`<@${member.user.id}> - ${member.user.tag} - ${member.user.id} ` + "**has been banned because the account was too young!**")
                .addField("**Attempted Joined Date**", member.joinedAt.toLocaleString(), true)
                .addField("**Created Ago**", `${moment(member.user.createdTimestamp).fromNow()}`, true)
                .addField("**Created Date**", new Date(member.user.createdAt).toLocaleDateString(), true)
                .setTimestamp();

            var sChannel = member.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed100)
    }
  }

  
  } 
  }
})


client.on('message', message => {
  let default_prefix = '!';
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = default_prefix;
  if (message.mentions.has(client.user)&& !message.content.includes("@here") && !message.content.includes("@everyone"))
    {
      message.channel.send("Hey there, my prefix in this server is " + "`" + prefix + "`")
    }
})

client.on('guildCreate', guild => {
  

  let embed = new discord.MessageEmbed()
  .setTitle(`Bot added to ${guild.name}`)
  .addField("Members", guild.memberCount)
  .addField('guild ID', guild.id)
  .setTimestamp()
  
 client.channels.cache.get('785560002961997824').send(embed);
})

client.on('guildCreate', guild => {
  
  let default_prefix = '!';
    let prefix = db.get(`prefix_${guild.id}`)
    if (prefix === null) prefix = default_prefix;
    let c = "`"
  const channel = guild.channels.cache.find(
    channel =>
      channel.type === "text" &&
      channel.permissionsFor(guild.me).has("SEND_MESSAGES")
  );
  channel.send(`Thanks for inviting me! To get started, you can run ${c}${prefix}help${c} for a list of commands. Run ${c}${prefix}setup${c} for information on how to properly setup the bot!`);
});

client.on('guildMemberAdd', member => {
  if (member.user.id === '716062999395303487') 
    {
      const channel = member.guild.channels.cache.find(
    channel =>
      channel.type === "text" &&
      channel.permissionsFor(member.guild.me).has("SEND_MESSAGES")
  );
      let embed = new discord.MessageEmbed()
      .setAuthor(`Alts Ejecter developer has joined the guild`, 'https://lh3.googleusercontent.com/proxy/IpdopKBh-8sgYPkwdrvcgzNdvStn9fXuj7rLftdCMXdxAiKCQ7TFHV0vc48gIQIwgKR069obYyXHEq7txlOq-IMeQvLXnMgTG2SqG0lxTsgSRJO0bMY3_JEdxYQQ9r2Y7YSiUxYoNpIG3hla76WUAkDA8r8Def9Az71ONrihgIh4YWwLJvCCfJJb2A')
      .setTitle("Prepare for impact...")
      .setDescription(`This server is now under the best protection, two godly people (<@716062999395303487> & <@752668737181712420>), the god and the creator of the other god LOL.`)
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setTimestamp()
      .setImage('https://i.pinimg.com/originals/ed/af/78/edaf7858a9fed7cb8bc8bedc5e139c93.gif')
  channel.send(embed);


    }
})



const express = require("express"); 
const app = express();
app.get("/", (req, res) => { 
    res.status(200).send({success: true})
});
app.listen(3000)


          
client.snipes = new Map();
client.on("messageDelete", async function(message, channel) {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null
  });
});



client.login(process.env.token) //if (Date.now() - member.user.createdAt > days)

