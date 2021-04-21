import { createContext, useEffect, useState } from "react";
import { tracksStorage } from "../api/TrackStorage";

const useTracksService = () => {
  // Data
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const getAll = async () => setTracks(await tracksStorage.getAll());
    getAll();
  }, []);

  // Operations
  const addNewTrack = async (track) => {
    const newTrack = await tracksStorage.create(track);
    setTracks([...tracks, newTrack]);
  };
  const editTrack = async (track) => {
    const updatedTrack = await tracksStorage.update(track);
    setTracks(tracks.map((tr) => (tr.id === track.id ? updatedTrack : tr)));
  };
  const deleteTrack = async (track) => {
    await tracksStorage.delete(track.id);
    setTracks(tracks.filter((tr) => tr.id !== track.id));
  };

  // Service
  const tracksService = { tracks, setTracks, addNewTrack, editTrack, deleteTrack };

  return tracksService;
};

export const TracksContext = createContext();
export const TracksProvider = ({ children }) => {
  const tracksService = useTracksService();
  return <TracksContext.Provider value={tracksService}>{children}</TracksContext.Provider>;
};
