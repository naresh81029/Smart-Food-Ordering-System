package com.food.rest.controller;

import com.food.rest.entity.AppUser;
import com.food.rest.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserRepo repo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AppUser req) {

        AppUser user = repo.findByUsername(req.getUsername()).orElse(null);

        if (user == null) {
            return ResponseEntity.status(401)
                    .body(Map.of("message", "User not found"));
        }

        // ✅ BCrypt check
        if (!passwordEncoder.matches(req.getPassword(), user.getPassword())) {
            return ResponseEntity.status(401)
                    .body(Map.of("message", "Invalid password"));
        }

        return ResponseEntity.ok(Map.of(
                "username", user.getUsername(),
                "role", user.getRole()
        ));
    }

    @PostMapping("/register/user")
    public ResponseEntity<?> registerUser(@RequestBody AppUser user) {
        if (repo.findByUsername(user.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body("Username already exists");
        }
        user.setRole("USER");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return ResponseEntity.ok(repo.save(user));
    }

    @PostMapping("/register/admin")
    public ResponseEntity<?> registerAdmin(@RequestBody AppUser user) {
        if (repo.findByUsername(user.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body("Username already exists");
        }
        user.setRole("ADMIN");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return ResponseEntity.ok(repo.save(user));
    }
}
