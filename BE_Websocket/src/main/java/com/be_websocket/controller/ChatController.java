package com.be_websocket.controller;


import com.be_websocket.model.Chat;

import com.be_websocket.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/chat")
public class ChatController {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    IUserService userService;
    @MessageMapping("/sendMessage")
    public ResponseEntity<?> sendMessage(@Payload Chat message) {
        return ResponseEntity.ok(message);
    }

    @GetMapping("/show-user")
    public ResponseEntity<?> showAllUser() {
        return ResponseEntity.ok(userService.findAll());
    }

}
