import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-step2',
  imports: [CommonModule, FormsModule],
  templateUrl: './registration-step2.html',
  styleUrl: './registration-step2.css',
})
export class RegistrationStep2 {
  goBack() {
    throw new Error('Method not implemented.');
  }
  step = signal(1); 
  digits: number[] = [1, 2, 3, 4, 5, 6];

  nextStep() {
   // if (this.password === this.confirmPassword && this.phoneNumber) {
      this.step.set(2);
    //} else {
    //  alert('Please fill all fields correctly.');
   // }
  }

  verifyEmail() {
    alert('Phone verified successfully!');
  }

  resendOtp() {
    alert('OTP resent!');
  }

}
