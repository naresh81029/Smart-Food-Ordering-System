package com.food.rest.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Data
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int foodId;

    @NotNull
    private String foodName;

    private String foodCatagory;

    private double price;

    private String imageUrl;
}
