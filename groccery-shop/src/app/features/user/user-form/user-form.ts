import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm implements OnInit {

  user: User = { id: null, name: '', email: '', role: 'Customer',  password: '' }

  isEdit = false;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private alertService: AlertService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.userService.getById(id).subscribe({
        next: (res) => (
          this.user = res,
          this.isEdit = true
        ),
        error: (err) => this.alertService.show('Failed to get user by id', 'danger')
      });
    }
  }

  save() {
    if (this.isEdit && this.user.id !== null) {
      this.userService.update(this.user.id, this.user).subscribe(() => {
        console.log("User updated successfully:", this.user);
        this.alertService.show('User updated successfully!', 'success');
        this.router.navigate(['/app/users']);
      });
    } else {
      this.userService.create(this.user).subscribe(() => {
        console.log("User created successfully:", this.user);
        this.alertService.show('User created successfully!', 'success');
        this.router.navigate(['/app/users']);
      });
    }
  }

}
