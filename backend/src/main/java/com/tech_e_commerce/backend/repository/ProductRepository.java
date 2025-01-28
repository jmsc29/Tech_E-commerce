package com.tech_e_commerce.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tech_e_commerce.backend.entity.Product;

public interface ProductRepository extends MongoRepository<Product, String> {
    // Métodos personalizados si los necesitas
}
