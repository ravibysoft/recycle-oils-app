import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-registration-step2',
  imports: [CommonModule, FormsModule],
  templateUrl: './registration-step2.html',
  styleUrl: './registration-step2.css',
})
export class RegistrationStep2 {
  step = 1;
  showVerifiedModal = false;
  verificationMessage = '';

  form = {
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    gender: '',
    nationality: '',
    ethnicity: '',
  };

  otpInputs = Array(6).fill('');
  otp: string[] = ['', '', '', '', '', ''];
  constructor(private toast: ToastService) { }
  continueToEmail() {
    if (this.form.firstName && this.form.lastName && this.form.dob && this.form.gender && this.form.nationality && this.form.ethnicity) {
      this.step = 2;
    } else {
      this.toast.show('Please fill all required fields.', 'error');
    }
  }

  moveToNext(event: any, index: number) {
    const value = event.target.value;
    if (value && index < this.otpInputs.length - 1) {
      const next = document.querySelectorAll('input')[index + 1] as HTMLInputElement;
      next?.focus();
    }
  }

  verifyEmail() {
    const otpValue = this.otp.join('');
    if (otpValue.length === 6) {
      this.verificationMessage = 'Email verified';
      this.showVerifiedModal = true;
    } else {
      this.toast.show('Please enter the full OTP.', 'error');
    }
  }

  closeVerifiedModal() {
    this.showVerifiedModal = false;
    this.toast.show('Registration complete!', 'success');
  }

  previousStep() {
    this.step = 1;
  }

  resendOTP() {
    this.toast.show('OTP resent to your email.', 'success');
  }
}
