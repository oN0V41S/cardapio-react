package com.example.cardapio.food;

import org.springframework.data.jpa.repository.JpaRepository;

//  JpaRepository<> - interface do Spring Data JPA que fornece métodos padrão para realizar operações CRUD
public interface FoodRepository extends JpaRepository<Food, Long> {
}
