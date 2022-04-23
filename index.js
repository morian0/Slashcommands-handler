const { Discord, Client, Collection } = require("discord.js");

const client = new Client({
    intents: 32767,
    
});

const express = require("express");
const app = express();
app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

console.log(process.version)

module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
require("./handler")(client);
client.login("") // bot token
