async function getNowPresence(disClient) {
  try {
    const guildId = process.env.GID;
    const userId = process.env.UID;
    if (!guildId || !userId) throw new Error("guildId Or userId is undefined");
    const guild = await disClient.guilds.fetch(guildId);

    const member = await guild.members.fetch(userId);

    return member.presence;
  } catch (error) {
    throw error;
  }
}

module.exports = getNowPresence;
