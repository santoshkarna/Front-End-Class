import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../features/user/user.service';
import { ProductService } from '../../features/product/product.service';
import { User } from '../../features/user/user.model';
import { Product } from '../../features/product/product.model';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  totalUsers = 0;
  totalProducts = 0;
  outOfStock = 3;
  revenue = 52450;
  recentUsers: User[] = [];
  topProducts: Product[] = [];

  constructor(private userService: UserService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getTotalUsers();
    this.getTotalProducts();
  }

  private getTotalProducts() {
    this.productService.getAll().subscribe({
      next: (res) => (
        this.topProducts = res,
        this.totalProducts = res.length
      ),
      error: (err) => console.error('Failed to load products', err)
    });
  }

  private getTotalUsers() {
    this.userService.getAll().subscribe({
      next: (res) => (
        this.recentUsers = res,
        this.totalUsers = res.length
      ),
      error: (err) => console.error("Failed to load users ", err)
    });
  }
}
