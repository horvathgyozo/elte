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
  nedb.getNewId = function (cb) {
    this.find({})
      .sort({ id: -1 }) // reverse sort
      .limit(1) // get the first
      .exec(function (err, docs) {
        const id = docs[0]?.id + 1 ?? 1;
        cb && cb(err, id);
      });
    return this;
  };

  const db = {};
  const methods = ["find", "findOne", "insert", "update", "remove", "getNewId"];
  methods.forEach((method) => (db[method] = promisify(nedb[method].bind(nedb))));
  return db;
};

export class NedbStorage {
  constructor(nedb) {
    this.db = promisifyNedb(nedb);
  }
  async create(object) {
    if (!object.id) {
      object.id = await this.db.getNewId();
    }
    object._id = object.id;
    const newObject = await this.db.insert(object);
    return newObject;
  }
  async fill(objects) {
    this.db.remove({}, { multi: true });
    return await Promise.all(objects.map((obj) => this.create(obj)));
  }
  async getAll() {
    const objects = await this.db.find({});
    return objects.map((obj) => ({ ...obj, id: obj._id }));
  }
  async update(object) {
    if (!object.id) {
      return;
    }
    object._id = object.id;
    await this.db.update({ _id: object._id }, object, {});
    return object;
  }
  async delete(id) {
    await this.db.remove({ _id: id });
  }
}
