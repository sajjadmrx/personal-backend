import { Module } from "@nestjs/common";
import { DiscordModule } from "./modules/discord/discord.module";

@Module({
  imports: [DiscordModule],
  controllers: [],
  providers: []
})
export class AppModule {
}
