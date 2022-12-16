import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./comments/comments-reducer";
import followReducer from "./follows/follow-reducer";
import movieReducer from "./movies/movie-reducer";
import omdbReducer from "./omdb/omdb-reducer";
import userReducer from "./users/user-reducer";

export const store = configureStore({
    reducer: {
      movies: movieReducer,
      omdb: omdbReducer,
      users: userReducer,
      comments: commentReducer,
      follows: followReducer
    },
  });

