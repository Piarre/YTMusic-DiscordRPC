import DiscordRPC from "discord-rpc";

const setupIPC = (appId?: string) => {
  DiscordRPC.register(appId ?? "983806983184470086");

  const client = new DiscordRPC.Client({
    transport: "ipc",
  });

  client.login({ clientId: "983806983184470086" }).then(() => {
    client.subscribe("ACTIVITY_JOIN", ({}) => {});
    client.subscribe("ACTIVITY_SPECTATE", ({}) => {});
    client.subscribe("ACTIVITY_JOIN_REQUEST", () => {});
  });

  return client;
};

export default setupIPC;