# Slashcommands-handler
Discord.js v13 SlahCommands handler.

## قم بإضافة توكن البوت في index.js , وقم بإنشاء ملف بإسم الأمر في 
 ./SlashCommands/info/name.js
 
بداية ألأوامر في هذا البروجيكت :
```js
const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'command-name',
  description: 'command description',
  run: async function(client, interaction) {
  ```
  
  ### [Click Here](https://replit.com/@Moriano/Command-Handler#about.md) To Show Replit project.
