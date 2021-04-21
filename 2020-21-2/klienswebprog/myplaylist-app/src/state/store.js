import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import { playlistsReducer } from "./playlists/reducer";
import { tracksReducer } from "./tracks/reducer";

const rootReducer = combineReducers({
  playlists: playlistsReducer,
  tracks: tracksReducer,
});

const logger = createLogger({
  collapsed: true,
});

export const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
};
