import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string | null = null;
  user = {
    username: 'Fake Győző',
  };

  constructor() {}

  login(username: string, password: string) {
    // csrf token
    // login
    this.isLoggedIn = true;
  }
  logout() {
    this.isLoggedIn = false;
  }
}
