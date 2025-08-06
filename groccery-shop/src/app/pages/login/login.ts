import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { AlertService } from '../../shared/services/alert.service';
import { Alert } from '../../shared/components/alert';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, Alert],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';
  error = '';

  constructor(private router: Router, private authervice: AuthService, private alertService: AlertService) { }

  login() {
    if (this.email === 'admin@example.com' && this.password === 'admin') {
      this.authervice.login(this.email);
      this.alertService.show('Login successful!', 'success');
      this.router.navigate(['/app/dashboard']);
    } else {
      this.alertService.show('Invalid credentials', 'danger');
    }
  }
}
