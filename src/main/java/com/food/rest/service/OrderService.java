package com.food.rest.service;

import java.util.List;
import com.food.rest.entity.Food;
import com.food.rest.entity.Order;

public interface OrderService {
    Order bookOrder(String username, Food food, int quantity);
    List<Order> userOrders(String username);
    void cancelOrder(int orderId);
    List<Order> allOrders();
}
