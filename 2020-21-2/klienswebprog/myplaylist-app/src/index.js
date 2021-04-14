import React from "react";
import ReactDOM from "react-dom";
import { App } from "./views/App";

import "fomantic-ui-css/semantic.min.css";
import { PlaylistsProvider } from "./state/PlaylistsProvider";
import { TracksProvider } from "./state/TracksProvider";
import { playlistsStorage } from "./api/PlaylistsStorage";
import { examplePlaylists } from "./domain/playlist";

const render = () =>
  ReactDOM.render(
    <TracksProvider>
      <PlaylistsProvider>
        <App />
      </PlaylistsProvider>
    </TracksProvider>,
    document.getElementById("root")
  );

async function start() {
  // const newPlaylist = await playlistsStorage.create({ title: "Something", tracks: [] });
  // console.log(newPlaylist);
  // const newPlaylists = await playlistsStorage.fill(examplePlaylists);
  // console.log(newPlaylists);
  // const playlists = await playlistsStorage.getAll();
  // console.log(playlists);
  // // console.log(await playlistsStorage.update({ id: "1DV9bV0yTK1E29iW", title: "Else" }));
  // console.log(await playlistsStorage.delete("1DV9bV0yTK1E29iW"));
  // console.log(await playlistsStorage.getAll());
  render();
}
start();
