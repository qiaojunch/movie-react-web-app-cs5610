import axios from "axios";

const FOLLOWS_API = "http://localhost:4000/api/follow";
const USER_API = "http://localhost:4000/api/user";

const api = axios.create({ withCredentials: true });

// Create
export const followUser = async (follow) => {
    const res = await api.post(`${FOLLOWS_API}`, follow);
    return res.data
}
// Find a user's followers
export const findFollowers = async (followed) => {
    const res = await api.get(`${USER_API}/${followed}/followers`);
    return res.data;
}
// find a user's following list
export const findFollowing = async (follower) => {
    const res = await api.get(`${USER_API}/${follower}/following`);
    return res.data;
}