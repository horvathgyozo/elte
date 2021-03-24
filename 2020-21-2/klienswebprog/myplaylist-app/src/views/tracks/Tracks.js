import { TrackForm } from "./TrackForm";
import { exampleTracks } from "../../domain/track";
import { Track } from "./Track";
import { useState } from "react";

export function Tracks() {
  const tracks = exampleTracks;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="ui container">
        <button
          onClick={handleOpen}
          className="ui right floated green button"
          id="newModal"
        >
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

      <TrackForm open={open} onClose={handleClose} />
    </>
  );
}
