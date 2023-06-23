const { Client } = require("discord.js");

const client = new Client({
  intents: ["GuildMembers", "GuildPresences", "Guilds"],
});

module.exports = client;
