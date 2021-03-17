import cn from "classnames";

export function TrackList({ playlist, selectedTrackId, onSelect }) {
  return (
    <>
      <h3>{playlist.title}</h3>
      <div className="ui very relaxed selection list">
        {playlist.tracks.map((track) => (
          <div
            className={cn("item", { active: track.id === selectedTrackId })}
            key={track.id}
            onClick={() => onSelect(track.id)}
          >
            <i className="large music middle aligned icon"></i>
            <div className="content">
              <div className="header">{track.title}</div>
              <div className="description">{track.artist}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
