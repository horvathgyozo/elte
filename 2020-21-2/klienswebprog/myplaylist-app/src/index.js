import React from "react";
import ReactDOM from "react-dom";
import { App } from "./views/App";

import "fomantic-ui-css/semantic.min.css";
import { PlaylistsProvider } from "./state/PlaylistsProvider";
import { TracksProvider } from "./state/TracksProvider";
import { playlistsStorage } from "./api/PlaylistsStorage";
import { examplePlaylists } from "./domain/playlist";
import { tracksStorage } from "./api/TrackStorage";
import { exampleTracks } from "./domain/track";
import { configureStore } from "./state/store";
import { Provider } from "react-redux";

const store = configureStore();

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <TracksProvider>
        <PlaylistsProvider>
          <App />
        </PlaylistsProvider>
      </TracksProvider>
    </Provider>,
    document.getElementById("root")
  );

async function start() {
  // const newTracks = await tracksStorage.fill(exampleTracks);
  // console.log(newTracks);

  // const newPlaylists = await playlistsStorage.fill(examplePlaylists);
  // console.log(newPlaylists);
  // const newPlaylist = await playlistsStorage.create({ title: "Something", tracks: [] });
  // console.log(newPlaylist);
  // const playlists = await playlistsStorage.getAll();
  // console.log(playlists);
  // // console.log(await playlistsStorage.update({ id: "1DV9bV0yTK1E29iW", title: "Else" }));
  // console.log(await playlistsStorage.delete("1DV9bV0yTK1E29iW"));
  // console.log(await playlistsStorage.getAll());
  render();
}
start();
