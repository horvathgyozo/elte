import { createContext, useEffect, useState } from "react";
import { exampleTracks } from "../domain/track";

export const tracksServiceContext = createContext();

const useTracksService = () => {
  // Data
  const [tracks, setTracks] = useState([]);

  // Effects
  useEffect(() => {
    const loadedTracks = JSON.parse(window.localStorage.getItem("tracks")) || exampleTracks;
    setTracks(loadedTracks);
    // setTimeout(() => setTracks(exampleTracks), 2000);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("tracks", JSON.stringify(tracks));
  }, [tracks]);

  // Operations
  const addTrack = (track) => {
    track.id = Math.random().toString();
    setTracks([...tracks, track]);
  };
  const editTrack = (track) => setTracks(tracks.map((tr) => (tr.id !== track.id ? tr : track)));
  const deleteTrack = (track) => setTracks(tracks.filter((tr) => tr.id !== track.id));

  // Service
  const service = { tracks, addTrack, editTrack, deleteTrack };

  return service;
};

export const TracksServiceProvider = ({ children }) => {
  const tracksService = useTracksService();
  return <tracksServiceContext.Provider value={tracksService}>{children}</tracksServiceContext.Provider>;
};
