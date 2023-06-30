import React, { useEffect } from 'react'
import '../assets/css/messages.css'
import Chat from '../components/ChatRoom/Chat';
import ListChatRoom from '../components/ChatRoom/ListChatRoom';

export default function Messages() {
    return (
        <div className="container clearfix">
            <ListChatRoom />
            <Chat />
            {/* end chat */}
        </div>
    )
}
