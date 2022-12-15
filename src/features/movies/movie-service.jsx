import axios from 'axios';
const MOVIE_API_URL = 'http://localhost:4000/api/movie';
const LIST_API_URL = 'http://localhost:4000/api/list';

export const createMovie = async (newMovie) => {
    const res = await axios.post(MOVIE_API_URL, newMovie);
    const actualMovie = res.data;
    return actualMovie;
}

export const updateMovie = async (mid, updates) => {}

export const deleteMovie = async (mid) => {
    const res = await axios.delete(`${MOVIE_API_URL}/${mid}`);
    const status = res.data;
    return mid;
}
export const findMovieAll = async (type) => {
    const res = await axios.get(`${MOVIE_API_URL}/find?type=${type}`);
    const movies = res.data;
    return movies;
}

// Find only movies
export const findMovies = async () => {
    const res = await axios.get(`${MOVIE_API_URL}/find?type=movies`);
    const movies = res.data;
    return movies;
}

// Find only shows
export const findShows = async () => {
    const res = await axios.get(`${MOVIE_API_URL}/find?type=series`);
    const shows = res.data;
    return shows;
}

// Find a random movie
export const findMoiveRandom = async () => {
    const res = await axios.get(`${MOVIE_API_URL}/random`);
    const movie = res.data[0];
    return movie;
}

