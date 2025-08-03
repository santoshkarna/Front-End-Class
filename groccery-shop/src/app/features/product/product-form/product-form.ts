import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm implements OnInit {

  product: Product = { id: 0, name: '', category: '', price: 0, stock: 0 };

  isEdit = false;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const found = this.productService.getById(id);
      if (found) {
        this.product = { ...found };
        this.isEdit = true;
      }
    }
  }

  save() {
    if (this.isEdit) {
      this.productService.update(this.product.id, this.product);
    } else {
      this.productService.create(this.product);
    }
    this.router.navigate(['/app/products']);
  }

}
