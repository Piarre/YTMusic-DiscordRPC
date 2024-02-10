import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Youtube Music Discord RPC",
  description: "Discord Rich Presence for YouTube Music",
  lang: "en-US",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/installation" },
    ],

    sidebar: [
      {
        text: "Installation",
        items: [
          { text: "Get Started", link: "/installation" },
          { text: "License", link: "/license" },
          {
            text: "How to use",
            link: "/how-to-use",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Piarre/YTMusic-DiscordRPC" }],
    footer: {
      copyright: "Piarre",
      message: "MIT License",
    },
  },
});
