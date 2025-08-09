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

  product: Product = { id: null, name: '', category: '', price: 0, stock: 0 };

  isEdit = false;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productService.getById(id).subscribe({
        next: (res) => (
          this.product = res,
          this.isEdit = true
        ),
        error: (err) => console.error("Failed to get product by id: ", err, id)
      });
    }
  }

  save() {
    if (this.isEdit && this.product.id !== null) {
      this.productService.update(this.product.id, this.product).subscribe(() => {
        console.log("Product updated successfully: ", this.product)
      });
    } else {
      this.productService.create(this.product as Product).subscribe(() => {
        console.log("Product saved successfully: ", this.product)
      });
    }
    this.router.navigate(['/app/products']);
  }

}
