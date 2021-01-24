const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  const fynxdblapi = require('dblapi.js')
const fynxdbl = new fynxdblapi(fynx.dbltoken, client) 
fynxdbl.hasVoted(message.author.id).then(fynxoyverdi => {
      if(fynxoyverdi)  {
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Puffy Eklenti Komutları`, client.user.avatarURL())
.setDescription(`<a:hypesquad1:802800009778036796> Puffy botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Kayıt Sistemi__`,`<a:setting:802436383729385472> \`${prefix}kayıtsistemi\` Gelişmiş Kayıt Sistemi`,true)
.addField(`__Davet Sistemi__`,`<a:setting:802436383729385472> \`${prefix}davetsistemi\` Gelişmiş Davet Sistemi`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:802800009778036796> \`${prefix}davet\` | Puffy'yi Sunucunuza Davet Edersiniz\n<a:hypesquad1:802800009778036796> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:802800009778036796> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://i.hizliresim.com/aZjonf.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
                     } else {
        message.channel.send("Bu komutu kullanabilmek için bota oy vermeniz gerekmektedir. Bota oy verebilmek için https://discordbots.org/bot/802440231587938344/vote sitesini ziyaret edebilirsiniz. | Oy verdiyseniz 3 dakika beklemeniz gerekmektedir.")
      }
  })
  };
exports.config = {
name: "eklenti",
  aliases: []
}
