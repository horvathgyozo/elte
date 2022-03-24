import React from "react";
import cn from "classnames";

export function TrackList() {
  return (
    <>
      <h3>Playlist title</h3>
      <div className="ui very relaxed selection list">
        <div className={cn("item", { active: false })}>
          <i className="large music middle aligned icon"></i>
          <div className="content">
            <div className="header">Track title</div>
            <div className="description">Track artist</div>
          </div>
        </div>
        <div className={cn("item", { active: false })}>
          <i className="large music middle aligned icon"></i>
          <div className="content">
            <div className="header">Track title</div>
            <div className="description">Track artist</div>
          </div>
        </div>
      </div>
    </>
  );
}
