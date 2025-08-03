import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }


  ngOnInit(): void {
    this.products = this.productService.getAll();
  }

  deleteProduct(id: number) {
    this.productService.delete(id);
    this.products = this.productService.getAll();

  }

}
