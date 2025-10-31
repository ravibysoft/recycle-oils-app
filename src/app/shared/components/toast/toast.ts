import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToastMessage, ToastService } from '../../../core/services/toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class Toast {
  toast: ToastMessage | null = null;
  visible = false;
  sub!: Subscription;

  constructor(private toastService: ToastService) { }

  ngOnInit() {
    this.sub = this.toastService.toast$.subscribe((msg) => {
      this.toast = msg;
      this.visible = !!msg;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
