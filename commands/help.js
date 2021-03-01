const { MessageEmbed } = require("discord.js");
const { LOCALE } = require("../util/PruneMusicUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "help",
  aliases: ["h"],
  description: i18n.__("help.description"),
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(i18n.__mf("help.embedTitle", { botname: message.client.user.username }))
      .setAuthor('Click me to join Prune Community!', 'https://i.imgur.com/u1CaLBh.png', 'https://discord.com/invite/qpkRST8MMb')      
      .setDescription(i18n.__("help.embedDescription"))
      .setThumbnail('https://i.imgur.com/nj0cWWn.gif')      
      .setFooter('Prune Music is created by Mashwishi', 'https://i.imgur.com/qB9jJZ3.png')      
      .setColor("#859DE2");
      

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
