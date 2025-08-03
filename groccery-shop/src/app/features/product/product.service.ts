import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private products: Product[] = [
        { id: 1, name: 'Rice', category: 'Grains', price: 25, stock: 10 },
        { id: 2, name: 'Milk', category: 'Dairy', price: 15, stock: 50 }
    ];

    getAll(): Product[] {
        return [...this.products];
    }

    getById(id: number): Product | undefined {
        return this.products.find(p => p.id === id);
    }

    create(product: Product) {
        product.id = Date.now();
        this.products.push(product);
    }

    update(id: number, updated: Product) {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) this.products[index] = updated;
    }

    delete(id: number) {
        this.products = this.products.filter(p => p.id !== id);
    }

}