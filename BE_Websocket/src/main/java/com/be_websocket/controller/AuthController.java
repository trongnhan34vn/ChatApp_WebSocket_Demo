package com.be_websocket.controller;

import com.be_websocket.dto.request.UserDTO;
import com.be_websocket.dto.response.ResponseMessage;
import com.be_websocket.model.User;
import com.be_websocket.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {
    @Autowired
    IUserService userService;

    @PostMapping("/sign-up")
    public ResponseEntity<?> register(@RequestBody UserDTO userDTO) {
        boolean isRegisSuccess = userService.register(userDTO);
        if (!isRegisSuccess) {
            return new ResponseEntity<>(new ResponseMessage("Sign Up Fail!"), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(new ResponseMessage("Sign Up Success!"), HttpStatus.OK);
    }

    @PostMapping("/sign-in")
    public ResponseEntity<?> login(@RequestBody UserDTO userDTO, HttpServletResponse response) {
        User user = userService.login(userDTO);
        if(user == null) {
            return new ResponseEntity<>(new ResponseMessage("Login Fail!"), HttpStatus.BAD_REQUEST);
        }
        Cookie cookie = new Cookie("email", user.getEmail());
        cookie.setMaxAge(86400);
        response.addCookie(cookie);
        return ResponseEntity.ok(user);
    }
}
