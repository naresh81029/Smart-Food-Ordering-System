package com.food.rest.service;

import java.util.List;

import com.food.rest.entity.Food;


public interface FoodService {

	
	String saveFood(Food food);
	
	
	List<Food> getAllFood();
	
	void deleFoodById(int fid);
	
	
	 Food updateFood(int id, Food food);
	 
	 Food updatePartialFoodById(int fid,Food food);
	 
	 Food getFoodById(int id);
	 
	 List<Food> getFoodByCategory(String category);


	 List<Food> getFoodByPriceRange(double min, double max);

}
