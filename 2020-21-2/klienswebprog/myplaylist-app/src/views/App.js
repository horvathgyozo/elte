import { useState } from "react";
import { examplePlaylists } from "../domain/playlist";
import { exampleTracks } from "../domain/track";
import { Menu } from "./menu/Menu";
import { PlaylistForm } from "./playlists/PlaylistForm";
import { PlaylistList } from "./playlists/PlaylistList";
import { TrackDetail } from "./playlists/TrackDetail";
import { TrackList } from "./playlists/TrackList";

export function App() {
  const [playlists, setPlaylists] = useState(examplePlaylists);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(2);
  const [selectedTrackId, setSelectedTrackId] = useState(null);

  const selectedPlaylist = playlists.find(
    (playlist) => playlist.id === selectedPlaylistId
  );
  const selectedTrack = exampleTracks.find(
    (track) => track.id === selectedTrackId
  );

  const handleSelect = (id) => {
    setSelectedPlaylistId(id);
    setSelectedTrackId(null);
  };
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
      <Menu />
      <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
          <div className="ui six wide column">
            <h3>Playlists</h3>
            <PlaylistForm onSubmit={handleSubmit} />
            <PlaylistList
              playlists={playlists}
              selectedPlaylistId={selectedPlaylistId}
              onSelect={handleSelect}
            />
          </div>
          <div className="ui ten wide column">
            <TrackList
              playlist={selectedPlaylist}
              selectedTrackId={selectedTrackId}
              onSelect={(id) => setSelectedTrackId(id)}
            />
          </div>
        </div>
        <div className="ui divider"></div>
        <TrackDetail track={selectedTrack} />
      </div>
    </div>
  );
}
