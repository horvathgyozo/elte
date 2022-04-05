import React from "react";
import ReactDOM from "react-dom";
import { tracksServiceContext, TracksServiceProvider } from "./state/TracksServiceProvider";

import { App } from "./views/App";

ReactDOM.render(
  <TracksServiceProvider>
    <App />
  </TracksServiceProvider>,
  document.getElementById("root")
);
