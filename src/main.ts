import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { discordClient } from "./modules/discord/client";
import { config } from "dotenv";
import { ConfigService } from "@nestjs/config";
import { Config } from "./config";

config();

async function bootstrap() {
  await discordClient.login(process.env.BOT_DISCORD);
  console.log(`${discordClient.user.tag} is now Online!`);

  const app = await NestFactory.create(AppModule);
  const configService: ConfigService<Config> = new ConfigService<Config>();
  const port: number = configService.get("PORT") || 3000;
  await app.listen(port);
  console.log("Server Running on ", port);
}

bootstrap();
