import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public isMenuCollapsed = true;

  constructor(public authService: AuthService, private router: Router) {}

  async logout(): Promise<void> {
    await this.authService.logout();
    this.router.navigate(['/']);
  }
}
