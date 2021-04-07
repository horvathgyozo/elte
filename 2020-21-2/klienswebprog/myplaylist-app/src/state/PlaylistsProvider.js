import { createContext, useState } from "react";
import { examplePlaylists } from "../domain/playlist";

export const PlaylistsContext = createContext();
export const PlaylistsProvider = ({ children }) => {
  // Data
  const [playlists, setPlaylists] = useState(examplePlaylists);

  // Service
  const playlistsService = { playlists, setPlaylists };
  return (
    <PlaylistsContext.Provider value={playlistsService}>
      {children}
    </PlaylistsContext.Provider>
  );
};
