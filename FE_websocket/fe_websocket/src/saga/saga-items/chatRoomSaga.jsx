import { call } from "redux-saga/effects"
import * as chatRoomService from "../../API/services/chatRoomService"

export const createChatRoom = function* (action) {
    try {
        let response = yield call(chatRoomService.createChatRoom(), action.payload)
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}