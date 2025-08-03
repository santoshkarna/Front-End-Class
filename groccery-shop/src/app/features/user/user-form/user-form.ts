import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm implements OnInit {

  user: User = { id: 0, name: '', email: '', role: 'Customer' }

  isEdit = false;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const found = this.userService.getById(id);
      if (found) {
        this.user = { ...found }
        this.isEdit = true;
      }
    }
  }

  save() {
    if (this.isEdit) {
      this.userService.update(this.user.id, this.user)
    } else {
      this.userService.create(this.user)
    }
    this.router.navigate(['/app/users']);
  }
}
