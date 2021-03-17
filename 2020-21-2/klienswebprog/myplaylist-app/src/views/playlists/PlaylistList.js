import cn from "classnames";

export function PlaylistList({ playlists, selectedPlaylistId, onSelect }) {
  return (
    <div className="ui very relaxed selection list">
      {playlists.map((playlist) => (
        <div
          className={cn("item", { active: playlist.id === selectedPlaylistId })}
          key={playlist.id}
          onClick={() => onSelect(playlist.id)}
        >
          <i className="large compact disc middle aligned icon"></i>
          <div className="content">
            <div className="header">{playlist.title}</div>
            <div className="description">{playlist.tracks.length} songs</div>
          </div>
        </div>
      ))}
    </div>
  );
}
