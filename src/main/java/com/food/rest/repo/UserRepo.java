package com.food.rest.repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.food.rest.entity.AppUser;

public interface UserRepo extends JpaRepository<AppUser, Integer> {
    Optional<AppUser> findByUsername(String username);
}
