const {Client, Attachment} = require('discord.js');
const { prefix, token } = require('./config.json');
const bot = new Client();

bot.once('ready', ()=>{
    console.log("Solace Bot is online!");
    bot.user.setActivity('Over All All My Friends', {type: 'WATCHING'})
})




bot.on('message', message =>{
    if(message.member.hasPermission(["KICK_MEMBERS", "BAN_MEMBERS"])) {
         //console.log(message.content);

        if(message.content.startsWith(`${prefix}kick`)) {
        // message.channel.send("Kick")
        let member = message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave:" + member.displayName + " has been kicked.")
        })
        }
    }
})



bot.on('message', message =>{
    let args = message.content.substring(prefix.lenth).split(" ")

    switch(args[0]){
        case '-ping':
        message.channel.send('pong, I am working, I swear!')
       break;
        
        case '-endo':
        message.channel.send('Hello. We apologize but this server is currently only for traumagenic systems. We do know a server that is a very good space for endogenic systems. Please feel free to check it out!' + 
        ' https://discord.gg/TrhkYau')
        break;

        case '-tulpa':
        message.channel.send('Hello. We apologize but this server is currently only for traumagenic systems. We do know a server that is a very good space for tulpas. Please feel free to check it out!' + 
        ' https://discord.gg/TrhkYau')
        break;

        case '-99coping' :
        message.channel.send('http://www.yourlifeyourvoice.org/pages/tip-99-coping-skills.aspx')
        break;

        case '-anxiety' :
        message.channel.send('https://tinyurl.com/y5bvz45f')
        break;

        case '-info' :
            if(args[1] === 'version')
            message.channel.send('Version 1.0.1');
            
        break;

        case '-prune': 
     if(message.member.hasPermission("MANAGE_MESSAGES"))
          if(-args[1]) message.channel.bulkDelete(args[1])
          message.channel.send(args[1] + ' messages deleted')
            break;

        case '-user':
            const embed = new Discord.RichEmbed()
            .setTitle('User Info')
            .addField('*Server Name*', message.guild.name)
            .addField('*User Name*', message.author.username)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Woah! What a rad user!')
            .setTimestamp(message.author.createdTimestamp)
            .setColor(0x0898a0)
            message.channel.sendEmbed(embed);
        break;
        
        case '-duck':
            const ducky = new Attachment('https://i.ytimg.com/vi/8Qvao19J7dk/maxresdefault.jpg')
            message.channel.send(ducky);
        break;
    }
})


bot.on('message', message =>{
    if(message.member.hasPermission(["KICK_MEMBERS", "BAN_MEMBERS"])) {

    if(message.content.startsWith(`${prefix}info ban`))
        message.channel.send("This command bans the user mentioned, making it so they are kicked out of the server and unable to rejoin. To use, do **-ban @user**")
    }
})

bot.on('message', message =>{
    if(message.member.hasPermission("BAN_MEMBERS")) {

        if(message.content.startsWith(`${prefix}ban`)) {
        // message.channel.send("Kick")
        let member = message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(":wave:" + member.displayName + " has been banned.")
        })
        }
    }
})

    bot.on('message', message =>{
        if(message.member.hasPermission(["KICK_MEMBERS", "BAN_MEMBERS"])) {

        if(message.content.startsWith(`${prefix}info kick`))
            message.channel.send("This command kicks out the user mentioned. They will be able to join back in the future. To use, do **-kick @user**")
        }
    })
    



bot.login(process.amv.token);
          
          
          
