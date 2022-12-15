import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./movie-service";

export const createMoviesThunk = createAsyncThunk(
    'createMovie',
    (newMovie) => service.createMovie(newMovie)
);

export const deleteMovieThunk = createAsyncThunk(
    'deleteMovie',
    (movieId) => service.deleteMovie(movieId)
);

export const findMovieRandomThunk = createAsyncThunk(
    'findMovieRandom',
    (type) => service.findMoiveRandom(type)
)

// find only moives
export const findMoivesThunk = createAsyncThunk(
    'findMovies',
    () => service.findMovies()
)

// find only shows
export const findShowsThunk = createAsyncThunk(
    'findShows',
    () => service.findShows()
)

