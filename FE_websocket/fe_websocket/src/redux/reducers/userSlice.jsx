import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice (
    {
        name: 'user',
        initialState: {
            currentUser: null,
            userBinding: null,
            userList: []
        } ,
        reducers: {
            register: (state, action) => {
                state.userBinding = action.payload;
            },
            login: (state, action) => {
                state.userBinding = action.payload;
            },
            getCurrentUser: (state, action) => {
                state.currentUser = action.payload;
            },
            requestUserList: () => {

            },
            getUserList: (state,action) => {
                state.userList = action.payload;
            }
        }
    }
)

export default userSlice.reducer;
export const { register, login, getCurrentUser, requestUserList, getUserList } = userSlice.actions;