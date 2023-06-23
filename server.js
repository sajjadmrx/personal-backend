require("dotenv").config();

const http = require("http");
const io = require("socket.io");
const getNowPresence = require("./discord/getNowPresence");
const client = require("./discord/client");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!");
});

const socketServer = io(server, {
  cors: {
    origin: "*",
  },
});

(async () => {
  await client.login(process.env.TOKEN);
  console.log("discord bot is online");
  socketServer.on("connection", async (socket) => {
    console.log("connected a client");
    try {
      const presence = await getNowPresence(client);
      const data = {
        avatar: presence.user.avatarURL(),
        status: presence.status,
        activities: presence.activities,
      };

      client.emit("PRESENCE_UPDATED", data);
    } catch {
      client.emit("PRESENCE_UPDATED", {
        status: "OFFLINE",
      });
    }

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });

  client.on("presenceUpdate", (data) => {
    socketServer.emit("PRESENCE_UPDATED", data);
  });

  const PORT = process.env.PORT;
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
