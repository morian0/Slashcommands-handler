const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'test',
  description: 'test command',
  cooldown: 7,
  run: async function(client, interaction, args) {

let embed = new MessageEmbed()
.setTitle("By: Moriano")

interaction.followUp({ embeds: [embed] })
  }}
