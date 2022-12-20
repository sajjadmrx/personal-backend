import { Module } from "@nestjs/common";
import { InitEventsService } from "./services/initEvents.service";
import { PresenceUpdateEvent } from "./events/presenceUpdate.event";
import { discordClient } from "./client";
import { DiscordGateway } from "./discord.gateway";
import { DiscordEmit } from "./discord.emit";


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
      },
      DiscordGateway,
      DiscordEmit
    ],
    exports: []
  }
)
export class DiscordModule {
}