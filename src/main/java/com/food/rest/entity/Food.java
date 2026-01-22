package com.food.rest.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Data
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int foodId;

    @NotNull(message = "Food name must not be null")
    private String foodName;

    private String foodCatagory;

    private double price;

    // ✅ NEW FIELD
    private String imageUrl;
}
