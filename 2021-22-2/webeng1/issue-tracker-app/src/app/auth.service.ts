import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  // redirectUrl = '';
  redirectUrl: string | null = null;
  user = {
    username: 'Fake Győző',
  };

  constructor(private http: HttpClient) {}

  async login(email: string, password: string) {
    try {
      await lastValueFrom(this.http.get<null>('/sanctum/csrf-cookie'));

      await lastValueFrom(
        this.http.post<null>(
          '/login',
          {
            email,
            password,
          },
          httpOptions
        )
      );
      this.isLoggedIn = true;
    } catch (err) {
      console.log(err);
    }
  }
  logout() {
    this.isLoggedIn = false;
  }
}
