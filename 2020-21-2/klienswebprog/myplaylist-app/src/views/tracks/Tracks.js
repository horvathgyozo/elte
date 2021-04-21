import { TrackForm } from "./TrackForm";
import { Track } from "./Track";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrack, deleteTrack, updateTrack } from "../../state/tracks/actions";
import { getTracks } from "../../state/tracks/selectors";
import { getPlaylists } from "../../state/playlists/selectors";
import { addTrackToPlaylist } from "../../state/playlists/actions";

export function Tracks() {
  const [open, setOpen] = useState(false);
  const [editedTrack, setEditedTrack] = useState({});

  const tracks = useSelector(getTracks);
  const playlists = useSelector(getPlaylists);
  const dispatch = useDispatch();

  const handleNew = () => {
    setEditedTrack({});
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleSubmit = (track) => {
    if (!track.id) {
      dispatch(addTrack(track));
    } else {
      dispatch(updateTrack(track));
    }
  };
  const handleEdit = (track) => {
    setEditedTrack(track);
    setOpen(true);
  };
  const handleDelete = (track) => {
    dispatch(deleteTrack(track));
  };
  const handleSelect = (playlistId, trackId) => {
    dispatch(addTrackToPlaylist(playlistId, trackId));
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
              <Track
                onEdit={handleEdit}
                onDelete={handleDelete}
                key={track.id}
                track={track}
                playlists={playlists}
                onSelect={handleSelect}
              />
            ))}
          </tbody>
        </table>
      </div>

      <TrackForm track={editedTrack} open={open} onClose={handleClose} onSubmit={handleSubmit} />
    </>
  );
}
