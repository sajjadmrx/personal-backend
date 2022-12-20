import { Module } from "@nestjs/common";
import { InitEventsService } from "./services/initEvents.service";
import { PresenceUpdateEvent } from "./events/presenceUpdate.event";
import { Client } from "discord.js";
import { discordClient } from "./client";


@Module(
  {
    providers: [
      InitEventsService,
      {
        provide: "DISCORD_CLIENT",
        useValue: discordClient
      },
      {
        provide: "DISCORD_EVENT",
        useValue: [PresenceUpdateEvent]
      }
    ],
    exports: []
  }
)
export class DiscordModule {
}