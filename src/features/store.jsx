import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/movie-reducer";
import omdbReducer from "./omdb/omdb-reducer";

export const store = configureStore({
    reducer: {
      movies: movieReducer,
      omdb: omdbReducer
    },
  });

