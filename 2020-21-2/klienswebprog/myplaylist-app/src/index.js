import React from "react";
import ReactDOM from "react-dom";
import { App } from "./views/App";

import "fomantic-ui-css/semantic.min.css";
import { PlaylistsProvider } from "./state/PlaylistsProvider";
import { TracksProvider } from "./state/TracksProvider";

ReactDOM.render(
  <TracksProvider>
    <PlaylistsProvider>
      <App />
    </PlaylistsProvider>
  </TracksProvider>,
  document.getElementById("root")
);
