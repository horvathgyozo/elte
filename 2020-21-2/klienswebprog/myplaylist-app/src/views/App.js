import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { tracksStorage } from "../api/TrackStorage";
import { wsConnect } from "../state/messages/actions";
import { fetchPlaylists } from "../state/playlists/actions";
import { fetchTracks, setTracks } from "../state/tracks/actions";
import { Home } from "./home/Home";
import { Layout } from "./layout/Layout";
import { Playlists } from "./playlists/Playlists";
import { Search } from "./search/Search";
import { Tracks } from "./tracks/Tracks";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaylists());
    dispatch(fetchTracks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(wsConnect());
  });

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/playlists/:playlistId?/:trackId?">
            <Playlists />
          </Route>
          <Route path="/tracks">
            <Tracks />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
