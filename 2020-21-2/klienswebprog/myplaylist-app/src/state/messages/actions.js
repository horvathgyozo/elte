import { socketApi } from "../../api/SocketApi";
import { fetchTracks } from "../tracks/actions";

export const ADD_MESSAGE = "ADD_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

// Sync
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const deleteMessage = (message) => ({
  type: DELETE_MESSAGE,
  payload: message,
});

// Socket.io
export const wsConnect = () => (dispatch) => {
  socketApi.connect();
  socketApi.onMessageReceived((message) => {
    if (message.emitter !== socketApi.id) {
      dispatch(addMessage(message));
      setTimeout(() => {
        dispatch(deleteMessage(message));
      }, 5000);
      dispatch(fetchTracks());
    }
  });
};

export const sendMessage = (text) => (dispatch) => {
  socketApi.sendMessage({
    id: Date.now().toString(),
    text,
    emitter: socketApi.id,
  });
};
