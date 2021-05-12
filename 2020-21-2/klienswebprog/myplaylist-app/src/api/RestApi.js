const BASE_URL = "http://localhost:3030";

export const request = async (path, options = {}, userId) => {
  let url = `${BASE_URL}${path}`;
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${ACCESS_TOKEN}`,
    ...options.headers,
  };
  const token = window.sessionStorage.getItem("api-token");
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  if (userId) {
    url += `?userId=${userId}`;
  }

  const response = await fetch(url, {
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
  async getAll(userId) {
    const json = await request(this.resourcePath, {}, userId);
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
