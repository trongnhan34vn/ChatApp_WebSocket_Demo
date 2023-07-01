import instance from "../axios"

export const createChatRoom = async (data) => {
    let response = await instance.post('/api/chat/createChatRoom', data);
    return response.data;
}