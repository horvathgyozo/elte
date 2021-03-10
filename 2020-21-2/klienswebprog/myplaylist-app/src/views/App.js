import { Menu } from "./menu/Menu";
import { PlaylistForm } from "./playlists/PlaylistForm";
import { PlaylistList } from "./playlists/PlaylistList";
import { TrackDetail } from "./playlists/TrackDetail";
import { TrackList } from "./playlists/TrackList";

export function App() {
  return (
    <div className="ui container">
      <Menu />
      <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
          <div className="ui six wide column">
            <h3>Playlists</h3>
            <PlaylistForm />
            <PlaylistList />
          </div>
          <div className="ui ten wide column">
            <TrackList />
          </div>
        </div>
        <div className="ui divider"></div>
        <TrackDetail />
      </div>
    </div>
  );
}
