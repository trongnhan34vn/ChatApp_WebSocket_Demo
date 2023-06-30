package com.be_websocket.service.IMPL;

import com.be_websocket.dto.request.UserDTO;
import com.be_websocket.model.User;
import com.be_websocket.repository.UserRepository;
import com.be_websocket.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceIMPL implements IUserService {
    @Autowired
    UserRepository userRepository;

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    @Override
    public boolean register(UserDTO userDTO) {
        User user = findUserByEmail(userDTO.getEmail());
        if (user != null) {
            // đăng kí sai
            return false;
        }
        User newUser = new User();
        newUser.setFullName(userDTO.getFullName());
        newUser.setEmail(userDTO.getEmail());
        newUser.setPassword(userDTO.getPassword());
        userRepository.save(newUser);
        return true;
    }

    @Override
    public User login(UserDTO userDTO) {
        List<User> userList = userRepository.findAll();
        for (User user : userList) {
            boolean isExactEmail = user.getEmail().equals(userDTO.getEmail());
            boolean isExactPassword = user.getPassword().equals(userDTO.getPassword());
            if (isExactEmail && isExactPassword) {
                return user;
            }
        }
        return null;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }
}
