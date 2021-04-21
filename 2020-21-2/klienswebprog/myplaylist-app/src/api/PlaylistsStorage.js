import Nedb from "nedb/browser-version/out/nedb.min";
import { NedbStorage } from "./NedbStorage";

const nedb = new Nedb({ filename: "playlists.nedb", autoload: true });
export const playlistsStorage = new NedbStorage(nedb);
