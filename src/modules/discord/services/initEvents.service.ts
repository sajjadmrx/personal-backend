import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import "reflect-metadata";
import { Client, ClientEvents } from "discord.js";
import { DiscordEvent } from "../classes/discordEvent.class";
import { discordClient } from "../client";

@Injectable()
export class InitEventsService implements OnModuleInit {
  constructor(
    @Inject("DISCORD_CLIENT") private client: Client,
    @Inject("DISCORD_EVENT")
    private EventClasses: any[]) {
  }

  async onModuleInit(): Promise<any> {

    this.EventClasses.map((concreteClass: any) => {
      const eventName: keyof ClientEvents = Reflect.getMetadata("EVENT_NAME", concreteClass);
      const eventClass: DiscordEvent = new concreteClass(discordClient);
      this.client.on(eventName, eventClass.handler);
      console.log(`[${eventName}] successfully Added`);
    });

  }
}