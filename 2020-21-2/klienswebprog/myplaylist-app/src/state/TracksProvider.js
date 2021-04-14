import { createContext, useState } from "react";
import { exampleTracks } from "../domain/track";

const useTracksService = (initialTracks) => {
  // Data
  const [tracks, setTracks] = useState(initialTracks);

  // Operations
  const addNewTrack = (track) => {
    const id = Date.now();
    setTracks([...tracks, { ...track, id }]);
  };
  const editTrack = (track) => {
    setTracks(tracks.map((tr) => (tr.id === track.id ? track : tr)));
  };
  const deleteTrack = (track) => {
    setTracks(tracks.filter((tr) => tr.id !== track.id));
  };

  // Service
  const tracksService = { tracks, setTracks, addNewTrack, editTrack, deleteTrack };

  return tracksService;
};

export const TracksContext = createContext();
export const TracksProvider = ({ children }) => {
  const tracksService = useTracksService(exampleTracks);
  return <TracksContext.Provider value={tracksService}>{children}</TracksContext.Provider>;
};
