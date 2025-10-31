import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastMessage {
    message: string;
    type: 'success' | 'error' | 'warning';
}

@Injectable({ providedIn: 'root' })
export class ToastService {
    private toastSubject = new BehaviorSubject<ToastMessage | null>(null);
    toast$ = this.toastSubject.asObservable();

    show(message: string, type: 'success' | 'error' | 'warning' = 'success') {
        this.toastSubject.next({ message, type });
        setTimeout(() => this.toastSubject.next(null), 500);
    }
}
