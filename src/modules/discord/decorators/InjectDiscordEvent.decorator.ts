import "reflect-metadata";
import { ClientEvents } from "discord.js";


export function InjectDiscordEvent(event_name: keyof ClientEvents): ClassDecorator {
  return (target: Object) => {
    Reflect.defineMetadata("EVENT_NAME", event_name, target);
  };
}