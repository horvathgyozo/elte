import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: null | string = null;
  user = {
    username: 'Fake Győző',
  };
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    // this.http.get('/sanctum/csrf-cookie');
    // this.http.post('/login', {
    //   email: username,
    //   password,
    // });
    this.isLoggedIn = true;
  }
  logout() {
    this.isLoggedIn = false;
  }
}
