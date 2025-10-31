import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-step1',
  imports: [CommonModule, FormsModule],
  templateUrl: './registration-step1.html',
  styleUrl: './registration-step1.css',
})
export class RegistrationStep1 {
  step = signal(1);

  phoneNumber = '';
  password = '';
  confirmPassword = '';
  otp = ['', '', '', '', '', ''];
  passwordVisible = false;
  confirmPasswordVisible = false;

  passwordRules = [
    { label: 'Must be at least 8 characters', test: (v: string) => v.length >= 8 },
    { label: 'Must contain one uppercase and one lowercase character', test: (v: string) => /(?=.*[a-z])(?=.*[A-Z])/.test(v) },
    { label: 'Must contain one numeric character', test: (v: string) => /\d/.test(v) },
    { label: 'Must contain at least one special character', test: (v: string) => /[!@#$%^&*(),.?":{}|<>]/.test(v) },
  ];

  togglePasswordVisibility(type: 'main' | 'confirm') {
    if (type === 'main') this.passwordVisible = !this.passwordVisible;
    else this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  continue() {
    if (this.password === this.confirmPassword && this.phoneNumber) {
      this.step.set(2);
    } else {
      alert('Please fill all fields correctly.');
    }
  }

  verifyOtp() {
    alert('Phone verified successfully!');
  }

  resendOtp() {
    alert('OTP resent!');
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
