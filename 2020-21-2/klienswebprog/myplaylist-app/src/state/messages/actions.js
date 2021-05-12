import io from "socket.io-client";
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
let socket = null;

export const wsConnect = () => (dispatch) => {
  socket = io("http://localhost:3030");
  console.log(socket);
  socket.on("messages created", (message) => {
    if (message.emitter !== socket.id) {
      dispatch(addMessage(message));
      setTimeout(() => {
        dispatch(deleteMessage(message));
      }, 5000);
      dispatch(fetchTracks());
    }
  });
};

export const sendMessage = (text) => (dispatch) => {
  socket.emit("create", "messages", {
    id: Date.now().toString(),
    text,
    emitter: socket.id,
  });
};
