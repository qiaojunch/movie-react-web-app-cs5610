import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
import userReducer from "./users/user-reducer";

export const store = configureStore({
    reducer: {
      movies: moviesReducer,
      users: userReducer
    },
  });