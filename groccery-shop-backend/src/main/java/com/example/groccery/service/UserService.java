package com.example.groccery.service;

import com.example.groccery.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    List<User> findAll();

    User findById(Long id);

    User save(User user);

    void delete(Long id);

    User update(Long id, User user);

    Optional<User> findByEmail(String email);
}
