import { Client } from "discord.js";
import { DiscordEmit } from "../discord.emit";

export abstract class DiscordEvent {

  constructor(
    protected client: Client,
    protected discordEmit: DiscordEmit
  ) {
  }

  abstract handler(...args: any[]): void;

}
