import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginType = signal<'phone' | 'email'>('phone');
  showPassword = signal(false);

  constructor(private router: Router) { }

  toggleType(type: 'phone' | 'email') {
    this.loginType.set(type);
  }

  togglePassword() {
    this.showPassword.set(!this.showPassword());
  }

  login() {
    // Replace with real login
    alert('Logged in!');
    // this.router.navigate(['/home']);
  }
}
