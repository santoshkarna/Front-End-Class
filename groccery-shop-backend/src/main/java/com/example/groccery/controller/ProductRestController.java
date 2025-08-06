package com.example.groccery.controller;

import com.example.groccery.entity.Product;
import com.example.groccery.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Products")
@RequiredArgsConstructor
public class ProductRestController {
    
    private final ProductService productService;

    @GetMapping
    public List<Product> getProducts() {
        return productService.findAll();
    }

    @PostMapping
    public Product createProduct(@RequestBody Product Product) {
        return productService.save(Product);
    }

    @PutMapping
    public Product update(@PathVariable("id") Long id, @RequestBody Product Product) {
        return productService.update(id, Product);
    }

    @DeleteMapping
    public void delete(@PathVariable("id") Long id) {
        productService.delete(id);
    }

    @GetMapping("{/id}")
    public Product getProduct(@PathVariable("id") Long id) {
        return productService.findById(id);
    }
}
