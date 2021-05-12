import { AuthApi } from "./AuthApi";
import { RestApi } from "./RestApi";

export const playlistsApi = new RestApi("/playlists");
export const tracksApi = new RestApi("/tracks");
export const authApi = new AuthApi();
