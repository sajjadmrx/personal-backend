import { DiscordEvent } from "../classes/discordEvent.class";
import { InjectDiscordEvent } from "../decorators/InjectDiscordEvent.decorator";
import { Presence } from "discord.js";
import { DiscordActivity, DiscordPresenceStatus } from "../interfaces/discord.interface";

@InjectDiscordEvent("presenceUpdate")
export class PresenceUpdateEvent extends DiscordEvent {
  public handler(oldPresence: Presence, newPresence: Presence): void {
    if (newPresence.user.id == "784065806395768863") {
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