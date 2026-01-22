package com.food.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.food.rest.entity.Food;
import com.food.rest.entity.Order;
import com.food.rest.service.FoodService;
import com.food.rest.service.OrderService;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin("http://localhost:3000")
public class OrderController {

    @Autowired private OrderService orderService;
    @Autowired private FoodService foodService;

    @PostMapping("/book/{foodId}")
    public Order book(@PathVariable int foodId,
                      @RequestParam String username) {
        Food food = foodService.getFoodById(foodId);
        return orderService.bookOrder(username, food);
    }

    @GetMapping("/user/{username}")
    public List<Order> userOrders(@PathVariable String username) {
        return orderService.userOrders(username);
    }

    @PatchMapping("/cancel/{id}")
    public void cancel(@PathVariable int id) {
        orderService.cancelOrder(id);
    }

    @GetMapping("/admin")
    public List<Order> allOrders() {
        return orderService.allOrders();
    }
}

