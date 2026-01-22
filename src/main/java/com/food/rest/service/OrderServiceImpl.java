package com.food.rest.service;

import java.util.List;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.rest.entity.Food;
import com.food.rest.entity.Order;
import com.food.rest.repo.OrderRepo;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired private OrderRepo orderRepo;

    @Override
    public Order bookOrder(String username, Food food) {
        Order o = new Order();
        o.setUsername(username);
        o.setFoodId(food.getFoodId());
        o.setFoodName(food.getFoodName());
        o.setPrice(food.getPrice());
        o.setStatus("BOOKED");

        // ✅ ADD
        o.setBookedAt(LocalDateTime.now());

        return orderRepo.save(o);
    }

    @Override
    public List<Order> userOrders(String username) {
        return orderRepo.findByUsername(username);
    }

    @Override
    public void cancelOrder(int id) {
        Order o = orderRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        o.setStatus("CANCELLED");

        // ✅ ADD
        o.setCancelledAt(LocalDateTime.now());

        orderRepo.save(o);
    }


    @Override
    public List<Order> allOrders() {
        return orderRepo.findAll();
    }
}

