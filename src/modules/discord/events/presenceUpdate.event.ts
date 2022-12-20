import { DiscordEvent } from "../classes/discordEvent.class";
import { InjectDiscordEvent } from "../decorators/InjectDiscordEvent.decorator";
import { Presence } from "discord.js";
import { DiscordActivity, DiscordPresenceStatus } from "../interfaces/discord.interface";
import { ConfigService } from "@nestjs/config";
import { Config } from "../../../config";

@InjectDiscordEvent("presenceUpdate")
export class PresenceUpdateEvent extends DiscordEvent {
  public handler(oldPresence: Presence, newPresence: Presence): void {
    const config: ConfigService<Config> = new ConfigService<Config>();
    const userId: string = config.get("DISCORD_USER_ID");
    if (newPresence.user.id == userId) {
      const status: DiscordPresenceStatus = newPresence.status;
      const activities: DiscordActivity[] = newPresence.activities;
      const userAvatar: string = newPresence.user.avatarURL({ forceStatic: false, size: 4096 });
      this.discordEmit.presenceUpdated({
        status,
        avatar: userAvatar,
        activities
      });
    }
  }

}