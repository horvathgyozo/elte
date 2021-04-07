import { TrackForm } from "./TrackForm";
import { Track } from "./Track";
import { useContext, useState } from "react";
import { PlaylistsContext } from "../../state/PlaylistsProvider";
import { TracksContext } from "../../state/TracksProvider";

export function Tracks() {
  const { tracks, setTracks } = useContext(TracksContext);
  const { playlists, setPlaylists } = useContext(PlaylistsContext);
  const [open, setOpen] = useState(false);
  const [editedTrack, setEditedTrack] = useState({});

  const handleNew = () => {
    setEditedTrack({});
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleSubmit = (track) => {
    if (!track.id) {
      const id = Date.now();
      setTracks([...tracks, { ...track, id }]);
    } else {
      setTracks(tracks.map((tr) => (tr.id === track.id ? track : tr)));
    }
  };
  const handleEdit = (track) => {
    setEditedTrack(track);
    setOpen(true);
  };
  const handleDelete = (track) => {
    setTracks(tracks.filter((tr) => tr.id !== track.id));
    deleteTrackFromMultiplePlaylists(track);
  };
  const handleSelect = (playlistId, trackId) => {
    addTrackToPlaylist(playlistId, trackId);
  };

  const deleteTrackFromPlaylist = (playlist, trackId) => {
    const modifiedPlaylist = {
      ...playlist,
      tracks: playlist.tracks.filter((tr) => tr.id !== trackId),
    };
    return modifiedPlaylist;
  };
  const deleteTrackFromMultiplePlaylists = (track) => {
    setPlaylists(
      playlists.map((playlist) => deleteTrackFromPlaylist(playlist, track.id))
    );
  };
  const addTrackToPlaylist = (playlistId, trackId) => {
    const playlist = playlists.find((pl) => pl.id === playlistId);
    if (!playlist) return;

    if (playlist.tracks.some((tr) => tr.id === trackId)) return;

    const track = tracks.find((tr) => tr.id === trackId);
    if (!track) return;

    const modifiedPlaylist = {
      ...playlist,
      tracks: playlist.tracks.concat(track),
    };
    setPlaylists(
      playlists.map((pl) => (pl.id === playlistId ? modifiedPlaylist : pl))
    );
  };

  return (
    <>
      <div className="ui container">
        <button
          onClick={handleNew}
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

      <TrackForm
        track={editedTrack}
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </>
  );
}
