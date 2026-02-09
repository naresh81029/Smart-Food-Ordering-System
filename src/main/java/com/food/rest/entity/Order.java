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
    private int quantity;
    private String status;

    @Column(name = "total_amount", nullable = false)
    private double totalAmount;

    private LocalDateTime bookedAt;
    private LocalDateTime cancelledAt;
}


