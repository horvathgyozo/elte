import cn from "classnames";
import { Link } from "react-router-dom";

export function PlaylistList({ playlists, selectedPlaylistId }) {
  return (
    <div className="ui very relaxed selection list">
      {playlists.map((playlist) => (
        <Link
          className={cn("item", { active: playlist.id === selectedPlaylistId })}
          key={playlist.id}
          to={`/playlists/${playlist.id}`}
        >
          <i className="large compact disc middle aligned icon"></i>
          <div className="content">
            <div className="header">{playlist.title}</div>
            <div className="description">{playlist.tracks.length} songs</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
