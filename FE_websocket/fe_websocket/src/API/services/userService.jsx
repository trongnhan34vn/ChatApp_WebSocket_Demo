import instance from "../axios";

export const register = async (data) => {
    let response = await instance.post('/api/auth/sign-up', data);
    return response.data;
}

export const login = async (data) => {
    let response = await instance.post('/api/auth/sign-in', data);
    return response.data;
}

export const requestUserList = async () => {
    let response = await instance.get('/api/chat/show-user');
    return response.data;
}