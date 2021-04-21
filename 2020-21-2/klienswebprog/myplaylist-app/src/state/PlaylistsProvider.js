import { createContext, useEffect, useState } from "react";
import { playlistsStorage } from "../api/PlaylistsStorage";

const usePlaylistsService = () => {
  // Data
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const getAll = async () => setPlaylists(await playlistsStorage.getAll());
    getAll();
  }, []);

  // Operations
  const addNewPlaylist = async (title) => {
    const newPlaylist = await playlistsStorage.create({ title, tracks: [] });
    setPlaylists([...playlists, newPlaylist]);
  };
  const deleteTrackFromPlaylist = async (playlist, trackId) => {
    const modifiedPlaylist = {
      ...playlist,
      tracks: playlist.tracks.filter((trid) => trid !== trackId),
    };
    return await playlistsStorage.update(modifiedPlaylist);
  };
  const deleteTrackFromMultiplePlaylists = async (track) => {
    setPlaylists(
      await Promise.all(playlists.map(async (playlist) => await deleteTrackFromPlaylist(playlist, track.id)))
    );
  };
  const addTrackToPlaylist = async (playlistId, track) => {
    const playlist = playlists.find((pl) => pl.id === playlistId);
    if (!playlist) return;

    if (playlist.tracks.some((trid) => trid === track.id)) return;

    const modifiedPlaylist = {
      ...playlist,
      tracks: playlist.tracks.concat(track.id),
    };
    await playlistsStorage.update(modifiedPlaylist);
    setPlaylists(playlists.map((pl) => (pl.id === playlistId ? modifiedPlaylist : pl)));
  };

  // Service
  const playlistsService = { playlists, addNewPlaylist, deleteTrackFromMultiplePlaylists, addTrackToPlaylist };

  return playlistsService;
};

export const PlaylistsContext = createContext();
export const PlaylistsProvider = ({ children }) => {
  const playlistsService = usePlaylistsService();
  // render
  return <PlaylistsContext.Provider value={playlistsService}>{children}</PlaylistsContext.Provider>;
};
