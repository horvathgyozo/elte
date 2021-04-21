import { examplePlaylists } from "../../domain/playlist";
import { DELETE_TRACK } from "../tracks/actions";
import { ADD_PLAYLIST, ADD_TRACK_TO_PLAYLIST } from "./actions";

const initialState = examplePlaylists;

export const playlistsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const playlists = state;

  if (type === ADD_PLAYLIST) {
    const playlist = payload;
    return [...playlists, playlist];
  }

  if (type === ADD_TRACK_TO_PLAYLIST) {
    const { playlistId, trackId } = payload;

    const playlist = playlists.find((pl) => pl.id === playlistId);
    if (!playlist) return state;
    if (playlist.tracks.some((trid) => trid === trackId)) return state;
    const modifiedPlaylist = {
      ...playlist,
      tracks: playlist.tracks.concat(trackId),
    };
    return playlists.map((pl) => (pl.id === playlistId ? modifiedPlaylist : pl));
  }

  if (type === DELETE_TRACK) {
    const track = payload;
    return playlists.map((playlist) => ({
      ...playlist,
      tracks: playlist.tracks.filter((trid) => trid !== track.id),
    }));
  }

  return state;
};
