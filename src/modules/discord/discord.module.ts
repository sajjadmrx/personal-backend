import { Module } from "@nestjs/common";
import { InitEventsService } from "./services/initEvents.service";
import { PresenceUpdateEvent } from "./events/presenceUpdate.event";
import { discordClient } from "./client";
import { DiscordGateway } from "./discord.gateway";
import { DiscordEmit } from "./discord.emit";
import { InjectKeys } from "./constants/injectKey.constant";


@Module(
  {
    providers: [
      InitEventsService,
      {
        provide: InjectKeys.DISCORD_CLIENT,
        useValue: discordClient
      },
      {
        provide: InjectKeys.DISCORD_EVENTS,
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