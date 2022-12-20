import { DiscordEvent } from "../classes/discordEvent.class";
import { InjectDiscordEvent } from "../decorators/InjectDiscordEvent.decorator";
import { Presence } from "discord.js";

@InjectDiscordEvent("presenceUpdate")
export class PresenceUpdateEvent extends DiscordEvent {
  handler(oldPresence: Presence, newPresence: Presence): void {
  }

}