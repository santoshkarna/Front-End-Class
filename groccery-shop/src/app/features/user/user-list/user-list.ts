import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  deleteUser(id: number) {
    if (confirm('Are you sure to delete this user?')) {
      this.userService.delete(id).subscribe(() => this.loadUsers());
    }
  }

  loadUsers() {
    this.userService.getAll().subscribe({
      next: (res) => (
        this.users = res
      ),
      error: (err) => console.error("Failed to load users ", err)
    });
  }
}
