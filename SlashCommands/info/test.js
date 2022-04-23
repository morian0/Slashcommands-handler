const { Modal, TextInputComponent, showModal } = require('discord-modals') // Now we extract the showModal method
const { Formatters } = require('discord.js');
module.exports = {
    name: 'test',
    description: 'test discord-modal',
    cooldown: 5,

    run: async function(client, interaction, modal ) {

const modal2 = new Modal() // We create a Modal
.setCustomId('modal-customid')
.setTitle('Test of Discord-Modals!')
.addComponents([
  new TextInputComponent() // We create a Text Input Component
  .setCustomId('textinput-customid')
  .setLabel('Some text Here')
  .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
  .setMinLength(4)
  .setMaxLength(10)
  .setPlaceholder('Write a text here')
  .setRequired(true) // If it's required or not
]);
          if(modal.customId === 'modal-customid'){
            const firstResponse = modal2.getTextInputValue('textinput-customid')
            modal.followUp({ content: 'done yasta' + Formatters.codeBlock('markdown', firstResponse)})
          }}};