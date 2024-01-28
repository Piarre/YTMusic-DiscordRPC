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
  - icon: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 439 309" style="enable-background:new 0 0 439 309;" xml:space="preserve"> <style type="text/css"> .st0{fill:#1D63ED;} </style> <path class="st0" d="M379.6,111.7c-2.3-16.7-11.5-31.2-28.1-44.3l-9.6-6.5l-6.4,9.7c-8.2,12.5-12.3,29.9-11,46.6 c0.6,5.8,2.5,16.4,8.4,25.5c-5.9,3.3-17.6,7.7-33.2,7.4H1.7l-0.6,3.5c-2.8,16.7-2.8,69,30.7,109.1c25.5,30.5,63.6,46,113.4,46 c108,0,187.8-50.3,225.3-141.9c14.7,0.3,46.4,0.1,62.7-31.4c0.4-0.7,1.4-2.6,4.2-8.6l1.6-3.3l-9.1-6.2 C419.9,110.8,397.2,108.3,379.6,111.7L379.6,111.7z M240,0h-45.3v41.7H240V0z M240,50.1h-45.3v41.7H240V50.1z M186.4,50.1h-45.3 v41.7h45.3V50.1z M132.9,50.1H87.6v41.7h45.3V50.1z M79.3,100.2H34v41.7h45.3V100.2z M132.9,100.2H87.6v41.7h45.3V100.2z M186.4,100.2h-45.3v41.7h45.3V100.2z M240,100.2h-45.3v41.7H240V100.2z M293.6,100.2h-45.3v41.7h45.3V100.2z"/> </svg>
    title: Dockerized
    details: The app is dockerized and can be run on any platform.
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
