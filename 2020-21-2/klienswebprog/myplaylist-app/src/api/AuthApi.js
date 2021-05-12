import { request } from "./RestApi";

export class AuthApi {
  async login(username, password) {
    const response = await request("/authentication", {
      method: "POST",
      body: JSON.stringify({
        email: username,
        password: password,
        strategy: "local",
      }),
    });

    window.sessionStorage.setItem("api-token", response.accessToken);

    return response;
  }
  logout() {
    window.sessionStorage.removeItem("api-token");
  }
  getToken() {
    return window.sessionStorage.getItem("api-token");
  }
  async getUserById(userId) {
    return await request(`/users/${userId}`);
  }
}
