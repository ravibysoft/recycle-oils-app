import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-success-success',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up-success.html',
  styleUrl: './sign-up-success.css',
})
export class SignUpSuccess {
  constructor(private router: Router) { }

  public goToDashboard(): void {
    console.log('Navigating to dashboard...');
    this.router.navigate(['/dashboard']);
  }
}
