const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2MTk1OTgyMjAsImV4cCI6MTYyMjE5MDIyMCwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiMSIsImp0aSI6IjJmYTBiNzY2LWVlNTYtNGI0MC1hZGUyLTY2ODQ0NDlhY2RmMCJ9.qqANqMHQTxuZ3c--38090yr9GxAFod48l5yZLmx2x2g";
const BASE_URL = "http://localhost:3030";
const request = async (path, options = {}) => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    ...options.headers,
  };
  const response = await fetch(`${BASE_URL}${path}`, {
    headers,
    ...options,
  });
  const json = await response.json();
  return json;
};

export class RestApi {
  constructor(resourcePath) {
    this.resourcePath = resourcePath;
  }
  async create(object) {
    return await request(this.resourcePath, {
      method: "POST",
      body: JSON.stringify(object),
    });
  }
  async fill(objects) {
    // this.db.remove({}, { multi: true });
    // return await Promise.all(objects.map((obj) => this.create(obj)));
  }
  async getAll() {
    const json = await request(this.resourcePath);
    return json.data;
  }
  async update(object) {
    if (!object.id) {
      return;
    }
    return await request(`${this.resourcePath}/${object.id}`, {
      method: "PUT",
      body: JSON.stringify(object),
    });
  }
  async delete(id) {
    await request(`${this.resourcePath}/${id}`, {
      method: "DELETE",
    });
  }
}
