import { tracksStorage } from "../../api/TrackStorage";
import { deleteTrackFromAllPlaylists } from "../playlists/actions";

export const SET_TRACKS = "SET_TRACKS";
export const ADD_TRACK = "ADD_TRACK";
export const UPDATE_TRACK = "UPDATE_TRACK";
export const DELETE_TRACK = "DELETE_TRACK";

// Sync
export const setTracks = (tracks) => ({
  type: SET_TRACKS,
  payload: tracks,
});
export const addTrackToStore = (track) => ({
  type: ADD_TRACK,
  payload: { ...track, id: Date.now() },
});
export const updateTrackInStore = (track) => ({
  type: UPDATE_TRACK,
  payload: track,
});
export const deleteTrackFromStore = (track) => ({
  type: DELETE_TRACK,
  payload: track,
});

// Async
export const fetchTracks = () => async (dispatch) => {
  const tracks = await tracksStorage.getAll();
  dispatch(setTracks(tracks));
};
export const deleteTrack = (track) => async (dispatch) => {
  await tracksStorage.delete(track.id);
  dispatch(deleteTrackFromStore(track));
  dispatch(deleteTrackFromAllPlaylists(track));
};
export const addTrack = (track) => async (dispatch) => {
  const newTrack = await tracksStorage.create(track);
  dispatch(addTrackToStore(newTrack));
};
export const updateTrack = (track) => async (dispatch) => {
  const updatedTrack = await tracksStorage.update(track);
  dispatch(updateTrackInStore(updatedTrack));
};
