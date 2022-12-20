export interface Config {
  PORT: number,
  NODE_ENV: string
  DISCORD_USER_ID: string
  DISCORD_GUILD_ID: string
}

const config = (): Config => ({
  PORT: Number(process.env.PORT),
  NODE_ENV: process.env.NODE_ENV,
  DISCORD_USER_ID: process.env.DISCORD_USER_ID,
  DISCORD_GUILD_ID: process.env.DISCORD_GUILD_ID
});

export default config;
