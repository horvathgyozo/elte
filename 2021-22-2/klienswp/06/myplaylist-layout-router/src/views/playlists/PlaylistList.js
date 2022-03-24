import React from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";

export function PlaylistList({ playlists, selectedPlaylistId, onSelect }) {
  return (
    <div className="ui very relaxed selection list">
      {playlists.map((playlist) => (
        <NavLink
          className="item"
          key={playlist.id}
          to={`/playlists/${playlist.id}`}
        >
          <i className="large compact disc middle aligned icon"></i>
          <div className="content">
            <div className="header">{playlist.title}</div>
            <div className="description">{playlist.tracks.length} songs</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
