import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { AlertService } from '../../shared/services/alert.service';
import { Alert } from '../../shared/components/alert';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, Alert],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  // Fields for both login & register
  email = '';
  password = '';
  name = ''; // used in register mode

  isRegistering = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.authService.logout();
  }

  /**
   * Handles login with backend
   */
  login(): void {
    if (!this.email || !this.password) {
      this.alertService.show('Email and password are required.', 'danger');
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.alertService.show('Login successful!', 'success');
        this.router.navigate(['/app/dashboard']);
      },
      error: () => {
        this.alertService.show('Invalid credentials.', 'danger');
      }
    });
  }

  /**
   * Handles registration with backend
   */
  register(): void {
    if (!this.name || !this.email || !this.password) {
      this.alertService.show('All fields are required for registration.', 'danger');
      return;
    }

    this.authService.register(this.name, this.email, this.password).subscribe({
      next: (res) => {
        this.alertService.show(res.message || 'Registration successful!', 'success');
        this.toggleForm(); // switch to login form
      },
      error: (err) => {
        const message = err.error?.message || 'Registration failed. Try again.';
        this.alertService.show(message, 'danger');
      }
    });
  }

  /**
   * Toggle between login and register forms
   */
  toggleForm(): void {
    this.isRegistering = !this.isRegistering;
    this.clearFields();
  }

  /**
   * Clear input fields when toggling forms
   */
  private clearFields(): void {
    this.name = '';
    this.email = '';
    this.password = '';
  }
}
