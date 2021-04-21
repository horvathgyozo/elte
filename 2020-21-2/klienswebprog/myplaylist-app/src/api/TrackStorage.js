import Nedb from "nedb/browser-version/out/nedb.min";
import { NedbStorage } from "./NedbStorage";

const nedb = new Nedb({ filename: "tracks.nedb", autoload: true });
export const tracksStorage = new NedbStorage(nedb);
