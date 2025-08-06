import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Alert } from '../../shared/components/alert';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  imports: [CommonModule, RouterModule, RouterOutlet, Alert],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {

  constructor(private router: Router, private authService: AuthService) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/'])
  }

}
