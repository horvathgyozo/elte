import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  token: string = null;
  redirectUrl: string = null;
  authUrl = 'http://localhost:3000/api/token';

  constructor(private http: HttpClient) {
    const token = window.localStorage.getItem('token');
    if (token) {
      this.token = token;
      this.isLoggedIn = true;
    }
  }

  async login(email: string, password: string): Promise<void> {
    try {
      const loginResponse = await this.http
        .post<LoginResponse>(`${this.authUrl}/login`, {
          email,
          password,
        })
        .toPromise();
      this.token = loginResponse.token;
      this.isLoggedIn = true;
      window.localStorage.setItem('token', this.token);
    } catch (e) {
      console.log(e);
      return Promise.reject();
    }
  }
  async logout(): Promise<void> {
    await this.http.post(`${this.authUrl}/logout`, {}).toPromise();
    this.isLoggedIn = false;
    this.token = null;
    window.localStorage.removeItem('token');
    this.redirectUrl = null;
  }
}
