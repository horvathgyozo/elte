import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addPlaylist } from "../../state/playlists/actions";
import { getPlaylists } from "../../state/playlists/selectors";
import { PlaylistsContext } from "../../state/PlaylistsProvider";
import { getTracks } from "../../state/tracks/selectors";
import { TracksContext } from "../../state/TracksProvider";
import { PlaylistForm } from "./PlaylistForm";
import { PlaylistList } from "./PlaylistList";
import { TrackDetail } from "./TrackDetail";
import { TrackList } from "./TrackList";

export function Playlists() {
  const { playlistId: playlistIdParam, trackId: trackIdParam } = useParams();
  const selectedPlaylistId = Number.parseInt(playlistIdParam);
  const selectedTrackId = Number.parseInt(trackIdParam);

  const playlists = useSelector(getPlaylists);
  const tracks = useSelector(getTracks);
  const dispatch = useDispatch();

  const playlistsWithTracks = playlists.map((playlist) => ({
    ...playlist,
    tracks: playlist.tracks.map((trackId) => tracks.find((track) => track.id === trackId)).filter((track) => !!track),
  }));

  const selectedPlaylist = playlistsWithTracks.find((playlist) => playlist.id === selectedPlaylistId);
  const selectedTrack = tracks.find((track) => track.id === selectedTrackId);

  const handleSubmit = (title) => {
    dispatch(addPlaylist(title));
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
