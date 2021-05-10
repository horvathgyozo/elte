import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  form = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  message: string;

  get email(): AbstractControl {
    return this.form.get('email');
  }
  get password(): AbstractControl {
    return this.form.get('password');
  }

  ngOnInit(): void {}

  async onSubmit(): Promise<void> {
    try {
      await this.authService.login(this.email.value, this.password.value);
      if (this.authService.redirectUrl) {
        this.router.navigate([this.authService.redirectUrl]);
      } else {
        this.router.navigate(['/issues']);
      }
    } catch (e) {
      this.message = 'Cannot log in!';
    }
  }
}
