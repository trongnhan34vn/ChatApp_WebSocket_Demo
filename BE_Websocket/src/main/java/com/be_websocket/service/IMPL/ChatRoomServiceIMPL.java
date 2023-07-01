package com.be_websocket.service.IMPL;

import com.be_websocket.model.Room;
import com.be_websocket.repository.ChatRoomRepository;
import com.be_websocket.service.IChatRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatRoomServiceIMPL implements IChatRoomService {
    @Autowired
    ChatRoomRepository chatRoomRepository;
    @Override
    public Room save(Room room) {
        return chatRoomRepository.save(room);
    }
}
