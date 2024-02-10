import { WebSocketServer } from "ws";
import { calculateTimestamps } from "./lib/utils.js";

import { TRPC } from "./@types/response.js";

import DiscordRPC from "discord-rich-presence";
const client = DiscordRPC("983806983184470086");

(async () => {
  const wss = new WebSocketServer({ port: 3012 });

  client.on("connected", async () => {
    console.log("🚀 Connected to Discord's IPC");

    wss.on("connection", (ws: WebSocket) => {
      console.log(`🚀 WebSocket Server opened on port 3012`);

      ws.onmessage = (event: any) => {
        const { imageSong, song, time, timeMax, artist, album } = JSON.parse(event.data) as TRPC;

        if (!imageSong && !song && !time && !timeMax && !artist && !album) return;

        const { startTime, endTime } = calculateTimestamps(time, timeMax);

        const renderedText = song.toLowerCase() == album.toLowerCase() ? song : `${song} • ${album}`;

        client.updatePresence({
          state: artist,
          details: renderedText,
          startTimestamp: startTime,
          endTimestamp: endTime,
          largeImageKey: imageSong,
          smallImageKey: "https://upload.wikimedia.org/wikipedia/commons/d/d8/YouTubeMusic_Logo.png",
          instance: true,
          largeImageText: renderedText,
          smallImageText: "Youtube Music",
        });
      };
    });

    client.on("error", (err) => {
      console.error(err);
    });
  });
})();
