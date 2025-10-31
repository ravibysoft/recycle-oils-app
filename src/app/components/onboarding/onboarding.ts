import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  imports: [CommonModule],
  templateUrl: './onboarding.html',
  styleUrl: './onboarding.css',
})
export class Onboarding implements OnInit, OnDestroy {
  currentSlide = signal(0);
  private intervalId?: ReturnType<typeof setInterval>;

  slides = [
    {
      image: 'assets/images/slide1.png',
      title: 'Easily Recycle Your Oils',
      subtitle: 'You call, we pick up.'
    },
    {
      image: 'assets/images/slide2.png',
      title: 'Easily Recycle Your Oils',
      subtitle: 'You call, we pick up.'
    },
    {
      image: 'assets/images/slide3.png',
      title: 'Easily Recycle Your Oils',
      subtitle: 'You call, we pick up.'
    },
    {
      image: 'assets/images/slide4.png',
      title: 'You’re all set!',
      subtitle: 'You call, we pick up.'
    }
  ];
  constructor(private router: Router) { }
  ngOnInit() {
    // Automatically cycle slides every second
    this.intervalId = setInterval(() => {
      this.nextSlide(true);
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  nextSlide(auto = false) {
    const nextIndex = (this.currentSlide() + 1) % this.slides.length;
    this.currentSlide.set(nextIndex);

    // If user manually clicks "Next", reset timer to avoid fast skipping
    if (!auto && this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => this.nextSlide(true), 1000);
    }
  }
  getStarted() {
    if (this.intervalId) clearInterval(this.intervalId);
    // Navigate to another route
    this.router.navigate(['/role-section'], { skipLocationChange: true });
  }
}
