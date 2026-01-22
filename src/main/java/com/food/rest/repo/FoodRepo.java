package com.food.rest.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.food.rest.entity.Food;

public interface FoodRepo extends JpaRepository<Food, Integer> {

	List<Food> findByFoodCatagory(String foodCatagory);

	List<Food> findByPriceBetween(double min, double max);

	
}
