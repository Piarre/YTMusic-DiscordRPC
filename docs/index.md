---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Youtube Music"
  text: "Rich Presence"
  tagline: "A Discord Rich Presence for Youtube Music"
  actions:
    - theme: brand
      text: Get Started
      link: /installation
  image:
    src: https://upload.wikimedia.org/wikipedia/commons/d/d8/YouTubeMusic_Logo.png
    alt: Youtube Music Logo

features:
  - icon: ✨
    title: Web Scraping
    details: The app uses web scraping to get the song information.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #ff0000 30%, #bd34fe);

  --vp-home-hero-text-color: transparent;
  --vp-home-hero-text-background: -webkit-linear-gradient(120deg, #5865F2 60%, #bd34fe);

  --vp-home-hero-image-background-image: linear-gradient(120deg, #ff0000 45%, #bd34fe);
  --vp-home-hero-image-filter: blur(44px);
}

:root .main .text {
  color: var(--vp-home-hero-text-color);
  background: var(--vp-home-hero-text-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

:root .tagline {
  color: #5865F2;
}

:root .icon svg {
  width: 1.5em;
  height: 1.5em;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(58px);
  }
}

</style>
