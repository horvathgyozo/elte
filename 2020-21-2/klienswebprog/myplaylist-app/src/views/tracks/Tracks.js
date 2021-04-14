import { TrackForm } from "./TrackForm";
import { Track } from "./Track";
import { useContext, useState } from "react";
import { PlaylistsContext } from "../../state/PlaylistsProvider";
import { TracksContext } from "../../state/TracksProvider";

export function Tracks() {
  const { tracks, addNewTrack, editTrack, deleteTrack } = useContext(TracksContext);
  const { playlists, deleteTrackFromMultiplePlaylists, addTrackToPlaylist } = useContext(PlaylistsContext);
  const [open, setOpen] = useState(false);
  const [editedTrack, setEditedTrack] = useState({});

  const handleNew = () => {
    setEditedTrack({});
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleSubmit = (track) => {
    if (!track.id) {
      addNewTrack(track);
    } else {
      editTrack(track);
    }
  };
  const handleEdit = (track) => {
    setEditedTrack(track);
    setOpen(true);
  };
  const handleDelete = (track) => {
    deleteTrack(track);
    deleteTrackFromMultiplePlaylists(track);
  };
  const handleSelect = (playlistId, trackId) => {
    const track = tracks.find((tr) => tr.id === trackId);
    if (!track) return;
    addTrackToPlaylist(playlistId, track);
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
