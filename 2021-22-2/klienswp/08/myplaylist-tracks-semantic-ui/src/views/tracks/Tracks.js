import React, { useContext, useState } from "react";
import { TrackForm } from "./TrackForm";
import { Track } from "./Track";
import { tracksServiceContext } from "../../state/TracksServiceProvider";

export function Tracks() {
  const [open, setOpen] = useState(false);
  const [editedTrack, setEditedTrack] = useState({});
  const { tracks, addTrack, editTrack, deleteTrack } = useContext(tracksServiceContext);

  // Event handler
  const handleNew = (e) => {
    setEditedTrack({});
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };
  const handleSubmit = (track) => {
    if (track.id) {
      editTrack(track);
    } else {
      addTrack(track);
    }
  };
  const handleDelete = (track) => {
    deleteTrack(track);
  };
  const handleEdit = (track) => {
    setEditedTrack(track);
    setOpen(true);
  };

  return (
    <>
      <div className="ui container">
        <button onClick={handleNew} className="ui right floated green button" id="newModal">
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
              <Track key={track.id} track={track} onDelete={handleDelete} onEdit={handleEdit} />
            ))}
          </tbody>
        </table>
      </div>

      <TrackForm open={open} onClose={handleClose} onSubmit={handleSubmit} track={editedTrack} />
    </>
  );
}
