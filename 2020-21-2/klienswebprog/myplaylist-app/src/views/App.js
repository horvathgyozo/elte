import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./home/Home";
import { Layout } from "./layout/Layout";
import { Playlists } from "./playlists/Playlists";
import { Search } from "./search/Search";
import { Tracks } from "./tracks/Tracks";

export function App() {
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
