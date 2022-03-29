import React, { useState } from "react";
import { exampleTracks } from "../../domain/track";
import { TrackForm } from "./TrackForm";
import { Track } from "./Track";

export function Tracks() {
  const [open, setOpen] = useState(true);
  const [tracks, setTracks] = useState(exampleTracks);

  // Event handler
  const handleOpen = (e) => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };
  const handleSubmit = (track) => {
    track.id = Math.random().toString();
    setTracks([...tracks, track]);
  };

  return (
    <>
      <div className="ui container">
        <button onClick={handleOpen} className="ui right floated green button" id="newModal">
          <i className="plus icon"></i>
          New track
        </button>
        <h1>Tracks</h1>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <Track key={track.id} track={track} />
            ))}
          </tbody>
        </table>
      </div>

      <TrackForm open={open} onClose={handleClose} onSubmit={handleSubmit} />
    </>
  );
}
