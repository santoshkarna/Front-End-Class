package com.example.groccery.service;

import com.example.groccery.entity.Product;

import java.util.List;

public interface ProductService {

    List<Product> findAll();

    Product findById(Long id);

    Product save(Product product);

    void delete(Long id);

    Product update(Long id, Product product);
}
