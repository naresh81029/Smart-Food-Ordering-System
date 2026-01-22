package com.food.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.food.rest.entity.Food;
import com.food.rest.service.FoodService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000") // ✅ React frontend
@RestController
@RequestMapping("/api/food")
public class FoodController {

    @Autowired
    private FoodService fservice;

    // ✅ ADD FOOD
    @PostMapping("/add")
    public ResponseEntity<String> addFood(@Valid @RequestBody Food food) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(fservice.saveFood(food));
    }

    // ✅ GET ALL FOOD
    @GetMapping
    public List<Food> viewAllFood() {
        return fservice.getAllFood();
    }

    // ✅ DELETE FOOD
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteFood(@PathVariable int id) {
        fservice.deleFoodById(id);
        return ResponseEntity.noContent().build(); // 204
    }

    // ✅ FULL UPDATE (PUT)
    @PutMapping("/update/{id}")
    public Food updateFood(@PathVariable int id,
                           @RequestBody Food updatedFood) {
        return fservice.updateFood(id, updatedFood);
    }

    // ✅ PARTIAL UPDATE (PATCH)
    @PatchMapping("/update/{id}")
    public Food updatePartialFood(@PathVariable int id,
                                  @RequestBody Food updatedFood) {
        return fservice.updatePartialFoodById(id, updatedFood);
    }

    // ✅ GET FOOD BY ID
    @GetMapping("/{id}")
    public Food getFood(@PathVariable int id) {
        // Exception handled globally
        return fservice.getFoodById(id);
    }

    // ✅ GET FOOD BY CATEGORY
    @GetMapping("/category/{cat}")
    public List<Food> getByCategory(@PathVariable String cat) {
        return fservice.getFoodByCategory(cat);
    }

    // ✅ GET FOOD BY PRICE RANGE
    @GetMapping("/price")
    public List<Food> getByPriceRange(
            @RequestParam double min,
            @RequestParam double max) {
        return fservice.getFoodByPriceRange(min, max);
    }
}
