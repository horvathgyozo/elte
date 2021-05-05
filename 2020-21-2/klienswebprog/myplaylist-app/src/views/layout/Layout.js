import { Menu } from "../menu/Menu";
import { MessageList } from "../messages/MessageList";

export function Layout({ children }) {
  return (
    <div className="ui container">
      <Menu />
      {children}
      <MessageList />
    </div>
  );
}
