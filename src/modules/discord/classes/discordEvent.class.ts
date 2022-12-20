import { Client } from "discord.js";
import { Inject } from "@nestjs/common";

export abstract class DiscordEvent {

  constructor(
    @Inject("DISCORD_CLIENT") protected client: Client
  ) {
  }

  abstract handler(...args: any[]): void;

}