import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../../core/services/toast.service';
import { Router } from '@angular/router';

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
  otpInputs = Array(6).fill('');
  passwordVisible = false;
  confirmPasswordVisible = false;
  showVerifiedModal = false;
  verificationMessage = '';

  passwordRules = [
    { label: 'Must be at least 8 characters', test: (v: string) => v.length >= 8 },
    { label: 'Must contain one uppercase and one lowercase character', test: (v: string) => /(?=.*[a-z])(?=.*[A-Z])/.test(v) },
    { label: 'Must contain one numeric character', test: (v: string) => /\d/.test(v) },
    { label: 'Must contain at least one special character', test: (v: string) => /[!@#$%^&*(),.?":{}|<>]/.test(v) },
  ];
  constructor(private toast: ToastService, private router: Router) { }

  togglePasswordVisibility(type: 'main' | 'confirm') {
    if (type === 'main') this.passwordVisible = !this.passwordVisible;
    else this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  continue() {
    if (this.password === this.confirmPassword && this.phoneNumber) {
      this.step.set(2);
    } else {
      this.toast.show('Please fill all fields correctly.', 'error');
    }
  }

  verifyOtp() {
    const otpValue = this.otp.join('');
    if (otpValue.length === 6) {
      this.verificationMessage = 'Phone verified successfully!';
      this.showVerifiedModal = true;
    } else {
      this.toast.show('Please enter the full OTP.', 'error');
    }
  }
  moveToNext(event: any, index: number) {
    const value = event.target.value;
    if (value && index < this.otpInputs.length - 1) {
      const next = document.querySelectorAll('input')[index + 1] as HTMLInputElement;
      next?.focus();
    }
  }
  closeVerifiedModal() {
    this.showVerifiedModal = false;
    this.toast.show('Verification complete!', 'success');
    this.router.navigate(['/registration_step2'], { skipLocationChange: true });
  }


  resendOtp() {
    this.toast.show('OTP resent!', 'success');
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
