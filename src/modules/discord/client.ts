import { Client } from "discord.js";

export const discordClient: Client = new Client({
  intents: ["GuildMembers", "GuildPresences", "Guilds"]
});