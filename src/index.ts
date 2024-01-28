import { TRPC } from "./@types/response.js";

import { WebSocketServer } from "ws";

import { calculateTimestamps } from "./utils.js";
import { Command } from "commander";
import setupIPC from "./lib/Discord.js";

const client = setupIPC();
const YTRPC = new Command().version("1.0.0");

YTRPC.option("-p, --port <port>", "Port to run the WebSocket Server").action((options) => {
  let port = process.env.PORT || options.port || 3012;

  if (isNaN(port)) {
    console.error("❌ Port must be a number, using default port 3012");
    port = 3012;
  }

  const wss = new WebSocketServer({ port });

  client.on("connected", async () => {
    console.log("🚀 Connected to Discord's IPC");

    wss.on("connection", (ws: WebSocket) => {
      console.log(`🚀 WebSocket Server opened on port ${port}`);

      ws.onmessage = (event: any) => {
        const { imageSong, song, time, timeMax, artist, album } = JSON.parse(event.data) as TRPC;

        if (!imageSong && !song && !time && !timeMax && !artist && !album) return;

        const { startTime, endTime } = calculateTimestamps(time, timeMax);

        client.setActivity({
          state: artist,
          details: song == album ? song : `${song} • ${album}`,
          startTimestamp: startTime,
          endTimestamp: endTime,
          largeImageKey: imageSong,
          smallImageKey:
            "https://upload.wikimedia.org/wikipedia/commons/d/d8/YouTubeMusic_Logo.png",
          instance: true,
          largeImageText: `${song} • ${album}`,
          smallImageText: "Youtube Music",
          buttons: [
            {
              label: "Cover Link",
              url: imageSong,
            },
          ],
          // buttons: [
          //   {
          //     label: "Listen on Youtube Music",
          //     url: "",
          //   },
          // ],
        });
      };
    });

    client.on("error", (err) => {
      console.error(err);
    });
  });
});

(async () => {
  YTRPC.parse(process.argv);
})();
