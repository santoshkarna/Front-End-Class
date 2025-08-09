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
    this.loadProducts()
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure to delete this product?')) {
      this.productService.delete(id).subscribe(() => this.loadProducts());
    }

  }

  loadProducts() {
    this.productService.getAll().subscribe({
      next: (res) => (this.products = res),
      error: (err) => console.error('Failed to load products', err)
    })
  }

}
