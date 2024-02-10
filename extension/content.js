const ws = new WebSocket("ws://localhost:3012/");

ws.onopen = () => {
  setInterval(() => {
    const song = document.getElementsByClassName("title style-scope ytmusic-player-bar")[0].innerText;

    const songInfo = document.getElementsByClassName("byline style-scope ytmusic-player-bar complex-string")[0]
      .innerText;

    const artist = songInfo.split("•")[0].trim();
    const album = songInfo.split("•")[1].trim();

    const imageSong = document.querySelector("#song-image yt-img-shadow img").getAttribute("src");
    // const songLink = document
    //   .querySelector("input style-scope yt-copy-link-renderer")[0]
    //   .ariaValueText();

    const [time, timeMax] = document
      .getElementsByClassName("time-info style-scope ytmusic-player-bar")[0]
      .innerText.split("/");

    ws.send(
      JSON.stringify({
        song,
        imageSong,
        album,
        time,
        timeMax,
        artist,
        // link: songLink,
      })
    );
  }, 1 * 1000);
};
