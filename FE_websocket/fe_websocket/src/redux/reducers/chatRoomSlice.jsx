import { createSlice } from "@reduxjs/toolkit"
const chatRoomSlice = createSlice(
    {
        name: 'chatRoom',
        initialState: {
            listChatRoom: [],
            selectChatRoom: null
        },
        reducers: {
            createChatRoom: (state, action) => {

            }
        }
    }
)

export default chatRoomSlice.reducer
export const { createChatRoom } = chatRoomSlice.actions