export function TrackDetail({ track }) {
  return !track ? null : (
    <div className="ui segment">
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img src={track.thumbnailURL} alt="" />
          </div>
          <div className="content">
            <div className="header">{track.title}</div>
            <div className="meta">
              <span>{track.artist}</span>
              <span>{track.length}</span>
            </div>
            <div className="extra">
              {track.spotifyURL && (
                <a
                  href={track.spotifyURL}
                  className="ui button tiny green button"
                >
                  <i className="spotify icon"></i>
                  Listen on Spotify
                </a>
              )}
              {track.chordsURL && (
                <a
                  href={track.chordsURL}
                  className="ui button tiny teal button"
                >
                  <i className="microphone icon"></i>
                  Show lyrics
                </a>
              )}
              {track.lyricsURL && (
                <a
                  href={track.lyricsURL}
                  className="ui button tiny orange button"
                >
                  <i className="guitar icon"></i>
                  Show chords
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
