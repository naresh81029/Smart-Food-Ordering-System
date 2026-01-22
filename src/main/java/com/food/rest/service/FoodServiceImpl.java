package com.food.rest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.rest.entity.Food;
import com.food.rest.repo.FoodRepo;


@Service
public class FoodServiceImpl implements FoodService{
	
	@Autowired
	FoodRepo frepo;
	
@Override
public String saveFood(Food food) {
	// TODO Auto-generated method stub
	
	frepo.save(food);
	return "Saved Successfully";
}


@Override
public List<Food> getAllFood() {
	// TODO Auto-generated method stub
	return frepo.findAll();
}


@Override
public void deleFoodById(int fid) {
	// TODO Auto-generated method stub
	
	frepo.deleteById(fid);
	
}



@Override
public Food updateFood(int fid, Food food) {

    Food existingFood = frepo.findById(fid)
            .orElseThrow(() -> new RuntimeException("Food not found with id: " + fid));

    existingFood.setFoodName(food.getFoodName());
    existingFood.setFoodCatagory(food.getFoodCatagory());
    existingFood.setPrice(food.getPrice());

    return frepo.save(existingFood);
}


@Override
public Food updatePartialFoodById(int fid, Food food) {
	// TODO Auto-generated method stub
	  Food existingFood = frepo.findById(fid)
	            .orElse(null);
	  if(existingFood!=null) {
	  if(food.getFoodName() !=null)

	    existingFood.setFoodName(food.getFoodName());
	  
	  if(food.getFoodCatagory() !=null)
	    existingFood.setFoodCatagory(food.getFoodCatagory());
	  
	  if(food.getPrice() !=0)
	    existingFood.setPrice(food.getPrice());

	    return frepo.save(existingFood);
	
	

}
return null;

}

@Override
public List<Food> getFoodByCategory(String category) {
    return frepo.findByFoodCatagory(category);
}



@Override
public Food getFoodById(int id) {
	// TODO Auto-generated method stub
	return frepo.findById(id).orElse(null);
}

@Override
public List<Food> getFoodByPriceRange(double min, double max) {
    return frepo.findByPriceBetween(min, max);
}


}
