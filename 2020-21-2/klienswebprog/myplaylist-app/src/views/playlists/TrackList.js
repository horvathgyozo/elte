import { examplePlaylists } from "../../domain/playlist";

export function TrackList() {
  return (
    <>
      <h3>Classics</h3>
      <div className="ui very relaxed selection list">
        {examplePlaylists[0].tracks.map((track) => (
          <div className="item">
            <i className="large music middle aligned icon"></i>
            <div className="content">
              <a className="header">{track.title}</a>
              <div className="description">{track.artist}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
