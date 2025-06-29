import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onLogin() {
    // Prosty fake login bez backendu:
    if (this.email === 'admin@admin.com' && this.password === 'admin') {
      localStorage.setItem('userId', '1');
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/tasks']);
    } else if (this.email === 'user@user.com' && this.password === 'user') {
      localStorage.setItem('userId', '2');
      localStorage.setItem('role', 'user');
      this.router.navigate(['/tasks']);
    } else {
      alert('Błędne dane logowania');
    }
  }
}
