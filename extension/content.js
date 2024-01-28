const ws = new WebSocket("ws://localhost:3012/");

ws.onopen = () => {
  setInterval(() => {
    const songName = document.getElementsByClassName("title style-scope ytmusic-player-bar")[0]
      .innerText;

    const songInfo = document.getElementsByClassName(
      "byline style-scope ytmusic-player-bar complex-string"
    )[0].innerText;

    const artistName = songInfo.split("•")[0].trim();
    const album = songInfo.split("•")[1].trim();
    const albumReleaseYear = songInfo.split("•")[2].trim();

    const songCover = document.querySelector("#song-image yt-img-shadow img").getAttribute("src");
    // const songLink = document
    //   .querySelector("input style-scope yt-copy-link-renderer")[0]
    //   .ariaValueText();

    const [time, timeMax] = document
      .getElementsByClassName("time-info style-scope ytmusic-player-bar")[0]
      .innerText.split("/");

    ws.send(
      JSON.stringify({
        song: songName,
        imageSong: songCover,
        album: album,
        time: time,
        timeMax: timeMax,
        artist: artistName,
        // link: songLink,
      })
    );
  }, 1 * 1000);
};
