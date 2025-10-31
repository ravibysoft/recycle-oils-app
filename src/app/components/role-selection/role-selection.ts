import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-selection',
  imports: [CommonModule],
  templateUrl: './role-selection.html',
  styleUrl: './role-selection.css',
})
export class RoleSelection {
  constructor(private router: Router) { }

  selectRole(role: string) {
    localStorage.setItem('userRole', role);
    this.router.navigate(['/login']);
  }
}
