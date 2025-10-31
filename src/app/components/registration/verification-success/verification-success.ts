import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verification-success',
  imports: [CommonModule, FormsModule],
  templateUrl: './verification-success.html',
  styleUrl: './verification-success.css',
})
export class VerificationSuccess {
  message: string = 'Verification successful!';

  onContinue() {
    // Add your continue logic here
  }
}
