import { PresenceStatus, Activity, Presence } from "discord.js";

export type DiscordPresenceStatus = PresenceStatus;

export interface DiscordPresence extends Presence {
}

export interface DiscordActivity extends Activity {
}

export interface PresenceUpdated {
  status: DiscordPresenceStatus,
  activities: Array<DiscordActivity>
  avatar: string
}