import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "./state/store";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// console.log(store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch({
//   type: "CHANGE_TEXT",
//   payload: "a",
// });
// store.dispatch({
//   type: "CHANGE_TEXT",
//   payload: "al",
// });
