import { playlistsApi } from "../../api/rest";
import { getPlaylists } from "./selectors";
import { getUserId } from "../auth/selectors";

export const SET_PLAYLISTS = "SET_PLAYLISTS";
export const ADD_PLAYLIST = "ADD_PLAYLIST";
export const UPDATE_PLAYLIST = "UPDATE_PLAYLIST";

// Sync
export const setPlaylists = (playlists) => ({
  type: SET_PLAYLISTS,
  payload: playlists,
});
export const addPlaylistToStore = (playlist) => ({
  type: ADD_PLAYLIST,
  payload: playlist,
});
export const updatePlaylist = (playlist) => ({
  type: UPDATE_PLAYLIST,
  payload: playlist,
});

// Async
export const fetchPlaylists = () => async (dispatch, getState) => {
  // dispatch(setPlaylists(await playlistsStorage.getAll()));
  const userId = getUserId(getState());
  const playlists = await playlistsApi.getAll(userId);
  dispatch(setPlaylists(playlists));
};
export const addPlaylist = (title) => async (dispatch) => {
  const newPlaylist = await playlistsApi.create({ title, tracks: [] });
  dispatch(addPlaylistToStore(newPlaylist));
};
export const addTrackToPlaylist = (playlistId, trackId) => async (dispatch, getState) => {
  const playlists = getPlaylists(getState());
  const playlist = playlists.find((pl) => pl.id === playlistId);
  if (!playlist) return;
  if (playlist.tracks.some((trid) => trid === trackId)) return;
  const modifiedPlaylist = {
    ...playlist,
    tracks: playlist.tracks.concat(trackId),
  };
  const updatedPlaylist = await playlistsApi.update(modifiedPlaylist);
  dispatch(updatePlaylist(updatedPlaylist));
};
export const deleteTrackFromAllPlaylists = (track) => async (dispatch, getState) => {
  const playlists = getPlaylists(getState());
  for (const playlist of playlists) {
    if (playlist.tracks.includes(track.id)) {
      const modifiedPlaylist = {
        ...playlist,
        tracks: playlist.tracks.filter((trId) => trId !== track.id),
      };
      const updatedPlaylist = await playlistsApi.update(modifiedPlaylist);
      dispatch(updatePlaylist(updatedPlaylist));
    }
  }
};
