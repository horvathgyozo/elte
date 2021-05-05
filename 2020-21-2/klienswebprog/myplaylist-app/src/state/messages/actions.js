import io from "socket.io-client";

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
const socket = io("http://localhost:3030");
// socket.emit()
// socket.on()
export const sendMessage = (text) => (dispatch) => {
  socket.emit("create", "messages", {
    id: Date.now().toString(),
    text,
  });
};
