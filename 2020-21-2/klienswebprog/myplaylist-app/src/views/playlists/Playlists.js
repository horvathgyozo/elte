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

  const { playlists, setPlaylists } = useContext(PlaylistsContext);
  const { tracks } = useContext(TracksContext);

  const selectedPlaylist = playlists.find(
    (playlist) => playlist.id === selectedPlaylistId
  );
  const selectedTrack = tracks.find((track) => track.id === selectedTrackId);

  const handleSubmit = (title) => {
    const id =
      playlists.reduce(
        (max, playlist) => (playlist.id > max ? playlist.id : max),
        -Infinity
      ) + 1;
    setPlaylists([
      ...playlists,
      {
        id,
        title,
        tracks: [],
      },
    ]);
  };

  return (
    <div className="ui container">
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <div className="ui six wide column">
          <h3>Playlists</h3>
          <PlaylistForm onSubmit={handleSubmit} />
          <PlaylistList
            playlists={playlists}
            selectedPlaylistId={selectedPlaylistId}
          />
        </div>
        <div className="ui ten wide column">
          <TrackList
            playlist={selectedPlaylist}
            selectedTrackId={selectedTrackId}
          />
        </div>
      </div>
      <div className="ui divider"></div>
      <TrackDetail track={selectedTrack} />
    </div>
  );
}
