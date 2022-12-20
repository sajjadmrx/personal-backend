import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { SocketEmitsEnum } from "./constants/emits.constant";
import { getNowPresence } from "./utils/getNowActivity";
import { Inject } from "@nestjs/common";
import { Client as DiscordClient } from "discord.js";
import { DiscordPresence, PresenceUpdated } from "./interfaces/discord.interface";
import { InjectKeys } from "./constants/injectKey.constant";


@WebSocketGateway({
  cors: {
    origin: "*"
  }
})
export class DiscordGateway {

  constructor(@Inject(InjectKeys.DISCORD_CLIENT) private discordClient: DiscordClient) {
  }

  @WebSocketServer()
  socketServer: Server;

  async handleConnection(client: Socket) {
    try {
      const presence: DiscordPresence = await getNowPresence(this.discordClient);
      const input: PresenceUpdated = {
        avatar: presence.user.avatarURL(),
        status: presence.status,
        activities: presence.activities
      };
      client.emit(SocketEmitsEnum.PRESENCE_UPDATED, input);
    } catch (e) {
      client.emit(SocketEmitsEnum.PRESENCE_UPDATED, { status: "OFFLINE" });
    }
  }


}