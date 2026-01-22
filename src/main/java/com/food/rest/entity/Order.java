package com.food.rest.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.Data;

@Entity
@Data
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String username;
    private int foodId;
    private String foodName;
    private double price;
    private String status;

    // ✅ ADD THESE
    private LocalDateTime bookedAt;
    private LocalDateTime cancelledAt;
}
