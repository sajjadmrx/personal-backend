import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { discordClient } from "./modules/discord/client";
import { config } from "dotenv";

config();

async function bootstrap() {
  await discordClient.login(process.env.BOT_DISCORD);
  console.log(`${discordClient.user.tag} is now Online!`);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
