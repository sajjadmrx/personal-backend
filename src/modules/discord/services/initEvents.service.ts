import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import "reflect-metadata";
import { Client, ClientEvents } from "discord.js";
import { DiscordEvent } from "../classes/discordEvent.class";
import { DiscordEmit } from "../discord.emit";
import { InjectKeys } from "../constants/injectKey.constant";

@Injectable()
export class InitEventsService implements OnModuleInit {
  constructor(
    @Inject(InjectKeys.DISCORD_CLIENT) private client: Client,
    private discordEmit: DiscordEmit,
    @Inject(InjectKeys.DISCORD_EVENTS)
    private EventClasses: any[]
  ) {
  }

  async onModuleInit(): Promise<any> {

    this.EventClasses.map((concreteClass: any) => {
      const eventName: keyof ClientEvents = Reflect.getMetadata("EVENT_NAME", concreteClass);
      const eventClass: DiscordEvent = new concreteClass(this.client, this.discordEmit);
      this.client.on(eventName, eventClass.handler.bind(eventClass));
    });

  }
}