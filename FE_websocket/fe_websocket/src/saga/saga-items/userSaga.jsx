import * as userService from "../../API/services/userService"
import { put } from 'redux-saga/effects'
import * as actions from "../../redux/reducers/userSlice"

export const register = function* (action) {
    try {
        let response = yield userService.register(action.payload)
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

export const login = function* (action) {
    try {
        let response = yield userService.login(action.payload)
        yield put(actions.getCurrentUser(response))
    } catch (error) {
        console.log(error)
    }
}

export const requestUserList = function* () {
    try {
        let response = yield userService.requestUserList();
        yield put(actions.getUserList(response));
    } catch (error) {
        
    }
}


