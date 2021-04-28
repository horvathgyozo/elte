import { DELETE_TRACK } from "../tracks/actions";
import { ADD_PLAYLIST, UPDATE_PLAYLIST, SET_PLAYLISTS } from "./actions";

const initialState = [];

export const playlistsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const playlists = state;

  if (type === SET_PLAYLISTS) {
    const playlists = payload;
    return playlists;
  }

  if (type === ADD_PLAYLIST) {
    const playlist = payload;
    return [...playlists, playlist];
  }

  if (type === UPDATE_PLAYLIST) {
    const playlist = payload;
    return playlists.map((pl) => (pl.id === playlist.id ? playlist : pl));
  }

  // if (type === DELETE_TRACK) {
  //   const track = payload;
  //   return playlists.map((playlist) => ({
  //     ...playlist,
  //     tracks: playlist.tracks.filter((trid) => trid !== track.id),
  //   }));
  // }

  return state;
};
