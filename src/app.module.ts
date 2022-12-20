import { Module } from "@nestjs/common";
import { DiscordModule } from "./modules/discord/discord.module";
import { ConfigModule } from "@nestjs/config";
import config from "./config";

@Module({
  imports: [DiscordModule, ConfigModule.forRoot({
    isGlobal: true,
    load: [config]
  })],
  controllers: [],
  providers: []
})
export class AppModule {
}
