import axios from "axios";

const USER_API_URL = "http://localhost:4000/api/user";
const BASE_API_URL = "http://localhost:4000/api";

const api = axios.create({ withCredentials: true });

export const findUserById = async (uid) => {
    const res = await api.get(`${USER_API_URL}/${uid}`);
    const user = res.data;
    return user;
}

export const findAllUsers = async () => {
    const res = await api.get(USER_API_URL);
    return res.data;
}

export const register = async (user) => {
    const res = await api.post(`${BASE_API_URL}/register`, user);
    const newUser = res.data;
    return newUser;
}

export const login = async (user) => {
    const res = await api.post(`${BASE_API_URL}/login`, user);
    return res.data;
}

export const logout = async () => {
    const res = await api.post(`${BASE_API_URL}/logout`);
    return res.data;
}

export const profile = async () => {
    const res = await api.post(`${BASE_API_URL}/profile`);
    return res.data;
}

export const deleteUser = async (uid) => {
    const res = await api.delete(`${USER_API_URL}/${uid}`);
    return uid;
}

export const updateUser = async (updates) => {
    const res = await api.put(`${USER_API_URL}/${updates._id}`, updates);
    const updatedUser = res.data;
    console.log("**user-service updatedUser888:", res.data );
    return res.data;
}

