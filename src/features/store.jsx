import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/movie-reducer";
import omdbReducer from "./omdb/omdb-reducer";
import userReducer from "./users/user-reducer";

export const store = configureStore({
    reducer: {
      movies: movieReducer,
      omdb: omdbReducer,
      users: userReducer
    },
  });

