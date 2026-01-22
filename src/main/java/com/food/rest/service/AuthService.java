package com.food.rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.food.rest.entity.AppUser;
import com.food.rest.repo.UserRepo;

@Service
public class AuthService {

    @Autowired
    private UserRepo repo;

    public AppUser register(AppUser user) {
        if (repo.findByUsername(user.getUsername()).isPresent()) {
            throw new RuntimeException("Username already exists");
        }
        return repo.save(user);
    }

    public AppUser login(String username, String password) {
        AppUser user = repo.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Invalid username"));

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }
        return user;
    }
}
