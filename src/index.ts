import DiscordRPC from "discord-rich-presence";
import { TRPC } from "./@types/response";

import WebSocket from "ws";

import { convertToMilliseconds, timeToMilli } from "./utils";

const port = (process.env.POpRT as any) || 3012;
const wss = new WebSocket.Server({ port });

export const client = DiscordRPC("983806983184470086");

client.on("connected", async () => {
  console.log("🚀 Connected to Discord's WebSocket");

  wss.on("connection", (ws: WebSocket) => {
    console.log(`🚀 WebSocket Server opened on port ${port}`);

    ws.on("message", (message: string) => {
      const body = JSON.parse(message) as TRPC;
      const { imageSong, song, time, timeMax, artist, album } = body;
      let startTime: number | null = null;

      if (!imageSong && !song && !timeMax && !artist) return;

      client.updatePresence({
        state: artist,
        details: `${song} • ${album}`,
        startTimestamp: Date.now() + convertToMilliseconds(time),
        endTimestamp: timeToMilli(timeMax ?? "0:00"),
        largeImageKey: imageSong,
        smallImageKey: "https://upload.wikimedia.org/wikipedia/commons/d/d8/YouTubeMusic_Logo.png",
        instance: true,
      });

      console.log({
        startTimestamp: Date.now() + convertToMilliseconds(time),
        endTimestamp: timeToMilli(timeMax ?? "0:00"),
      });
    });
  });

  client.on("error", (err) => {
    console.error(err);
  });
});
