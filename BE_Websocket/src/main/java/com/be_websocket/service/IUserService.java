package com.be_websocket.service;

import com.be_websocket.dto.request.UserDTO;
import com.be_websocket.model.User;

import java.util.List;

public interface IUserService {
    User findUserByEmail(String email);
    boolean register(UserDTO userDTO);
    User login (UserDTO userDTO);
    List<User> findAll();
}
