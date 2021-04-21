import { exampleTracks } from "../../domain/track";
import { ADD_TRACK, DELETE_TRACK, UPDATE_TRACK } from "./actions";

const initialState = exampleTracks;

export const tracksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const tracks = state;

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
