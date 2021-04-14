import Nedb from "nedb/browser-version/out/nedb.min";

const promisify = (fn) => (...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const promisifyNedb = (nedb) => {
  const db = {};
  const methods = ["find", "findOne", "insert", "update", "remove"];
  methods.forEach((method) => (db[method] = promisify(nedb[method].bind(nedb))));
  return db;
};

class PlaylistsStorage {
  constructor(nedb) {
    this.db = promisifyNedb(nedb);
  }
  async create(playlist) {
    if (playlist.id) {
      playlist._id = playlist.id;
    }
    const newPlaylist = await this.db.insert(playlist);
    newPlaylist.id = newPlaylist._id;
    return newPlaylist;
  }
  async fill(playlists) {
    this.db.remove({}, { multi: true });
    return await Promise.all(playlists.map((pl) => this.create(pl)));
  }
  async getAll() {
    const playlists = await this.db.find({});
    return playlists.map((pl) => ({ ...pl, id: pl._id }));
  }
  async update(playlist) {
    if (!playlist.id) {
      return;
    }
    playlist._id = playlist.id;
    await this.db.update({ _id: playlist._id }, playlist, {});
    return playlist;
  }
  async delete(id) {
    await this.db.remove({ _id: id });
  }
}

const nedb = new Nedb({ filename: "playlists.nedb", autoload: true });
export const playlistsStorage = new PlaylistsStorage(nedb);
