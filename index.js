const { Discord, Client, Collection } = require("discord.js");

const client = new Client({
    intents: 32767,
    
});

console.log(process.version)

module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
require("./handler")(client);
client.login("")




