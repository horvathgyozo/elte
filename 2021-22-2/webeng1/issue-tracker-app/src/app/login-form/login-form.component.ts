import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  message = '';

  get username() {
    return this.form.get('username')!;
  }
  get password() {
    return this.form.get('password')!;
  }

  ngOnInit() {}

  onSubmit() {
    try {
      this.authService.login(this.username.value, this.password.value);
      if (this.authService.redirectUrl) {
        this.router.navigate([this.authService.redirectUrl]);
      } else {
        this.router.navigate(['/']);
      }
    } catch (e) {
      this.message = 'Cannot log in!';
    }
  }
}
