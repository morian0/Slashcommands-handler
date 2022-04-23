
/*
const { MessageEmbed, MessageActionRow, MessageButton  } = require("discord.js")
module.exports = {
    name: 'other-app',
    description: 'request app',
    cooldown: 5,
    options: [
        {

                name: 'name',
                description: 'app name',
                cooldown: 7,
                type: "STRING",
                required: true
        },
        {
          name: 'user name',
          description: 'account name.',
          cooldown: 7,
          type: "STRING",
          required: true
        },
        {
        name: 'user description',
        description: 'account description.',
        type: 'STRING',
        cooldown: 7,
        required: true
        },

        {
            name: 'account link',
            description: 'account link.',
            type: 'STRING',
            cooldown: 7,
            required: true
        },
        
        ],
    run: async function(client, interaction ) {
     

        let channeldesc = await interaction.options.getString("user description")
        let channelname = await interaction.options.getString("user name")
        let channellink = await interaction.options.getString("account link")
        let channelst = await interaction.options.getString("app name")
            const embed = new MessageEmbed()
            .setTitle("تأكيد = قبول, الغاء = رفض.")
            .addFields(
              { name: `App Name:`, value: `${channelst}`, inline: false },
              { name: `User Link:`, value: `${channellink}`, inline: false },
              { name: `Username:`, value: `${channelname}`, inline: false },
              { name: `User description:`, value: `${channeldesc}`, inline: false },
              { name: `User Account (discord):`, value: `${interaction.user.id} , <@${interaction.user.id}>`, inline: false },
            
            )
        const row = new MessageActionRow()
        .addComponents(
        new MessageButton()
        .setLabel(`تأكيد`)
        .setCustomId(`y`)
        .setStyle("SECONDARY")
        .setEmoji(`✅`) // لو تبي تحط ايموجي
        )    .addComponents(
     new MessageButton()
            .setLabel(`الغاء`)
            .setCustomId(`n`)
            .setStyle("SECONDARY")
            .setEmoji(`❌`) 
            )
            client.channels.cache.get("952266233603063879").send({ embeds: [embed], components: [row] })
            .then((msg) => {
                setTimeout(function() {
                  msg.edit({ embeds: [embed], components: [row] })
                }, 30000)}
            )            
            interaction.followUp({ content:`> **تم ارسال طلبك , يرجاء انتظار رد الادارة العليا**`, ephemeral: true }) 
            interaction.delete()   

        const collector = interaction.channel.createMessageComponentCollector();
            
        collector.on('collect', async button => {

            if(button.customId === "y") {
                     const acc = new MessageEmbed()
                     .addFields(
                        { name: `streamer or youtuber:`, value: `${channelst}`, inline: false },
                        { name: `Channel Link:`, value: `${channellink}`, inline: false },
                        { name: `channel name:`, value: `${channelname}`, inline: false },
                         { name: `channel description:`, value: `${channeldesc}`, inline: false },
                        { name: `User:`, value: `${interaction.user.id} , <@${interaction.user.id}>`, inline: false },
                      
                      )
                      .setColor(`BLUE`)
                      client.channels.cache.get("952273177076178994").send({ embeds: [acc], components: [] })
}
if(button.customId === "n") {
const x = new MessageEmbed()
.setDescription(`تم رفضك ، لمعرفة السبب تواصل مع الادارة العليا`)
.setColor(`RED`)
    client.channels.cache.get("952273177076178994").send({ content: `<@${interaction.user.id}>`, embeds: [x] })
}
})}}
*/