import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { messagesReducer } from "./messages/reducer";
import { playlistsReducer } from "./playlists/reducer";
import { tracksReducer } from "./tracks/reducer";

const rootReducer = combineReducers({
  playlists: playlistsReducer,
  tracks: tracksReducer,
  messages: messagesReducer,
  auth: authReducer,
});

const logger = createLogger({
  collapsed: true,
});

export const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
};
