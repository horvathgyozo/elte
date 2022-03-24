import React from "react";

export function TrackDetails() {
  return (
    <div className="ui segment">
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img src="" alt="" />
          </div>
          <div className="content">
            <div className="header">Track title</div>
            <div className="meta">
              <span>Track artist</span>
              <span>Track length</span>
            </div>
            <div className="extra">
              <a href="#" className="ui button tiny green button">
                <i className="spotify icon"></i>
                Listen on Spotify
              </a>
              <a href="#" className="ui button tiny orange button">
                <i className="guitar icon"></i>
                Show chords
              </a>
              <a href="#" className="ui button tiny teal button">
                <i className="microphone icon"></i>
                Show lyrics
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
