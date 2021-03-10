import { examplePlaylists } from "../../domain/playlist";

export function PlaylistList() {
  console.log(examplePlaylists);
  return (
    <div className="ui very relaxed selection list">
      {examplePlaylists.map((playlist) => (
        <div className="item">
          <i className="large compact disc middle aligned icon"></i>
          <div className="content">
            <a className="header">{playlist.title}</a>
            <div className="description">{playlist.tracks.length} songs</div>
          </div>
        </div>
      ))}
    </div>
  );
}
