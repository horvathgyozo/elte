import io from "socket.io-client";

class SocketApi {
  constructor() {
    this.socket = null;
  }
  connect() {
    this.socket = io("http://localhost:3030");
  }
  sendMessage(message) {
    this.socket.emit("create", "messages", message);
  }
  onMessageReceived(callback) {
    const listener = (message) => {
      callback(message);
    };
    this.socket.on("messages created", listener);
    return () => this.socket.off("messages created", listener);
  }
  get id() {
    return this.socket?.id;
  }
}
export const socketApi = new SocketApi();
