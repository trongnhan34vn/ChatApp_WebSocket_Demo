import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createChatRoom } from '../../redux/reducers/chatRoomSlice';
import { requestUserList } from '../../redux/reducers/userSlice';
import { userSelector } from '../../redux/selector';

const ListChatRoom = () => {
    const userList = useSelector(userSelector).userList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(requestUserList())
    }, [])

    const currentUser = useSelector(userSelector).currentUser;

    const userElement = userList?.map((user, item) => {
        return (
            <li style={{ cursor: 'pointer' }} key={user.id} className="clearfix item-list">
                <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg"
                    alt="avatar"
                />
                <div className="about">
                    <div className="name">{user.fullName}</div> 
                    <div className="status">
                        <i className="fa fa-circle online" /> online
                    </div>
                </div>
            </li>
        )
    })

    return (
        <div className="people-list" id="people-list">
            <div className="search">
                <input type="text" placeholder="search" />
                <i className="fa fa-search" />
            </div>
            <ul className="list">
                {userElement}
            </ul>
        </div>
    );
}

export default ListChatRoom;
