import axios from "axios";

const COMMENT_API = 'http://localhost:4000/api/comments';
const MOVIE_COMMENTS_API = 'http://localhost:4000/api/movie';
const AUTHOR_COMMENTS_API = 'http://localhost:4000/api/user';

const api = axios.create({withCredentials: true});

// Create
export const createComment = async (comment) => {
    const res = await api.post(COMMENT_API, comment);
    return res.data;
}
// Find all comments for a movie
export const findCommentsByMovie = async (imdbID) => {
    const res = await api.get(`${MOVIE_COMMENTS_API}/${imdbID}/comments`);
    return res.data;
}
// Find all comments by a user
export const findCommentsByAuthor = async (uid) => {
    const res = await api.get(`${AUTHOR_COMMENTS_API}/${uid}/comments`);
    return res.data;
}

