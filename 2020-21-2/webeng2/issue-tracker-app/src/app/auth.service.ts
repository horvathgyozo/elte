import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  // token: string = null;
  redirectUrl: string = null;
  user: User = null;
  private authUrl = 'http://localhost:3000/api/token';

  constructor(private http: HttpClient) {}

  async login(email: string, password: string): Promise<void> {
    try {
      const loginResponse = await this.http
        .post<LoginResponse>(`${this.authUrl}/login`, {
          email,
          password,
        })
        .toPromise();
      // this.token = loginResponse.token;
      window.sessionStorage.setItem('token', loginResponse.token);
      this.isLoggedIn = true;
      this.user = await this.http.get<User>('http://localhost:3000/api/user').toPromise();
    } catch (e) {
      console.log(e);
      return Promise.reject();
    }
  }
  async logout(): Promise<void> {
    await this.http.post(`${this.authUrl}/logout`, {}).toPromise();
    // this.token = null;
    window.sessionStorage.removeItem('token');
    this.isLoggedIn = false;
    this.redirectUrl = null;
  }
}
