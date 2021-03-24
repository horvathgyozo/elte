import { Menu } from "../menu/Menu";

export function Layout({ children }) {
  return (
    <div className="ui container">
      <Menu />
      {children}
    </div>
  );
}
