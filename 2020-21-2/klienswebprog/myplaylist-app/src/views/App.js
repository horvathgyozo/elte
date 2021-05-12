import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { tracksStorage } from "../api/TrackStorage";
import { getIsLoggedIn } from "../state/auth/selectors";
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
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchPlaylists());
      dispatch(fetchTracks());
    }
  }, [dispatch, isLoggedIn]);

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
          <PrivateRoute path="/playlists/:playlistId?/:trackId?">
            <Playlists />
          </PrivateRoute>
          <PrivateRoute path="/tracks">
            <Tracks />
          </PrivateRoute>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

const PrivateRoute = ({ children, ...props }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return <Route {...props}>{isLoggedIn ? children : <Redirect to="/" />}</Route>;
};
