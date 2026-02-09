package com.food.rest.repo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.food.rest.entity.Order;

public interface OrderRepo extends JpaRepository<Order, Integer> {
    List<Order> findByUsername(String username);
}
