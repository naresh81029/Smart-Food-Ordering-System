package com.food.rest.service;

import java.time.LocalDateTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.food.rest.entity.Food;
import com.food.rest.entity.Order;
import com.food.rest.repo.OrderRepo;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepo orderRepo;

    @Override
    public Order bookOrder(String username, Food food, int quantity) {

        Order o = new Order();
        o.setUsername(username);
        o.setFoodId(food.getFoodId());
        o.setFoodName(food.getFoodName());
        o.setPrice(food.getPrice());
        o.setQuantity(quantity);
        o.setStatus("BOOKED");
        o.setBookedAt(LocalDateTime.now());

        // ✅ THIS FIXES YOUR ZERO ISSUE
        o.setTotalAmount(food.getPrice() * quantity);

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
        o.setCancelledAt(LocalDateTime.now());

        orderRepo.save(o);
    }

    @Override
    public List<Order> allOrders() {
        return orderRepo.findAll();
    }
}
