import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../features/user/user.service';
import { ProductService } from '../../features/product/product.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard  implements OnInit {

  totalUsers = 0;
  totalProducts = 0;
  outOfStock = 3;
  revenue = 52450;

  constructor(private userService: UserService, private productService: ProductService){}

  ngOnInit(): void {
    this.totalUsers = this.userService.getAll().length;
    this.totalProducts = this.productService.getAll().length;
  }

  recentUsers = [
    {name: 'Alice', email: 'alice@example.com'},
    {name: 'Bob', email: 'bob@example.com'},
    {name: 'Charlie', email: 'charlie@example.com'}
  ];

  topProducts = [
    {name: 'Rice', sales: 230},
    {name: 'Milk', sales: 180},
    {name: 'Flour', sales: 142}
  ]

}
