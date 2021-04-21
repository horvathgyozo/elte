import { useContext } from "react";
import { useParams } from "react-router";
import { PlaylistsContext } from "../../state/PlaylistsProvider";
import { TracksContext } from "../../state/TracksProvider";
import { PlaylistForm } from "./PlaylistForm";
import { PlaylistList } from "./PlaylistList";
import { TrackDetail } from "./TrackDetail";
import { TrackList } from "./TrackList";

export function Playlists() {
  const { playlistId: playlistIdParam, trackId: trackIdParam } = useParams();
  const selectedPlaylistId = Number.parseInt(playlistIdParam);
  const selectedTrackId = Number.parseInt(trackIdParam);

  const { playlists, addNewPlaylist } = useContext(PlaylistsContext);
  const { tracks } = useContext(TracksContext);

  const playlistsWithTracks = playlists.map((playlist) => ({
    ...playlist,
    tracks: playlist.tracks.map((trackId) => tracks.find((track) => track.id === trackId)).filter((track) => !!track),
  }));

  const selectedPlaylist = playlistsWithTracks.find((playlist) => playlist.id === selectedPlaylistId);
  const selectedTrack = tracks.find((track) => track.id === selectedTrackId);

  const handleSubmit = (title) => {
    addNewPlaylist(title);
  };

  return (
    <div className="ui container">
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <div className="ui six wide column">
          <h3>Playlists</h3>
          <PlaylistForm onSubmit={handleSubmit} />
          <PlaylistList playlists={playlistsWithTracks} selectedPlaylistId={selectedPlaylistId} />
        </div>
        <div className="ui ten wide column">
          <TrackList playlist={selectedPlaylist} selectedTrackId={selectedTrackId} />
        </div>
      </div>
      <div className="ui divider"></div>
      <TrackDetail track={selectedTrack} />
    </div>
  );
}
