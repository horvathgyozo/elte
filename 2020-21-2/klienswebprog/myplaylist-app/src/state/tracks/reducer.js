import { ADD_TRACK, DELETE_TRACK, SET_TRACKS, UPDATE_TRACK } from "./actions";

const initialState = [];

export const tracksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const tracks = state;

  if (type === SET_TRACKS) {
    const tracks = payload;
    return tracks;
  }

  if (type === ADD_TRACK) {
    const track = payload;
    return [...tracks, track];
  }

  if (type === UPDATE_TRACK) {
    const track = payload;
    return tracks.map((tr) => (tr.id === track.id ? track : tr));
  }

  if (type === DELETE_TRACK) {
    const track = payload;
    return tracks.filter((tr) => tr.id !== track.id);
  }

  return state;
};
