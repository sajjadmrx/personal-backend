import { Client, Guild, GuildMember } from "discord.js";
import { ConfigService } from "@nestjs/config";
import { DiscordPresence } from "../interfaces/discord.interface";
import { Config } from "../../../config";

export async function getNowPresence(client: Client): Promise<DiscordPresence> {
  try {
    const configService: ConfigService<Config> = new ConfigService<Config>();


    const guildId: string | undefined = configService.get("DISCORD_GUILD_ID");
    const userId: string | undefined = configService.get("DISCORD_USER_ID");
    if (!guildId || !userId)
      throw new Error("guildId Or userId is undefined");

    const guild: Guild = await client.guilds.fetch(guildId);
    const member: GuildMember = await guild.members.fetch(userId);
    return member.presence;
  } catch (error) {
    throw error;
  }
}