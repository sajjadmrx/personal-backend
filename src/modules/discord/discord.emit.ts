import { DiscordGateway } from "./discord.gateway";
import { SocketEmitsEnum } from "./constants/emits.constant";
import { PresenceUpdated } from "./interfaces/discord.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DiscordEmit {
  constructor(private discordGateway: DiscordGateway) {
  }

  public presenceUpdated(input: PresenceUpdated) {
    this.discordGateway.socketServer
      .emit(SocketEmitsEnum.PRESENCE_UPDATED, input);
  }
}