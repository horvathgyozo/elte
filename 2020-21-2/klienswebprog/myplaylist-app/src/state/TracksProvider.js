import { createContext, useState } from "react";
import { exampleTracks } from "../domain/track";

export const TracksContext = createContext();
export const TracksProvider = ({ children }) => {
  // Data
  const [tracks, setTracks] = useState(exampleTracks);

  // Service
  const tracksService = { tracks, setTracks };
  return (
    <TracksContext.Provider value={tracksService}>
      {children}
    </TracksContext.Provider>
  );
};
