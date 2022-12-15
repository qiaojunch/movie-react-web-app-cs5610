import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import moviesReducer from "./movies/movieSlice";
import userReducer from "./users/user-reducer";

export const store = configureStore({
    reducer: {
      movies: moviesReducer,
      users: userReducer
=======
import movieReducer from "./movies/movie-reducer";
import omdbReducer from "./omdb/omdb-reducer";

export const store = configureStore({
    reducer: {
      movies: movieReducer,
      omdb: omdbReducer
>>>>>>> link-movie-api
    },
  });

