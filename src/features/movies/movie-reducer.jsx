import { createSlice } from "@reduxjs/toolkit";
import { createMoviesThunk, findMoivesThunk, findMovieRandomThunk, findShowsThunk } from "./movie-thunk"
const initialState = {
    featured: {},
    movies: [],
    shows: [],
    loading: true
}
const movieReducer = createSlice({
    name: 'movies',
    initialState: initialState,
    extraReducers: {
        [findMovieRandomThunk.fulfilled]: (state, action) => {
            state.featured = action.payload;
            state.loading = false;
        },
        [findMoivesThunk.fulfilled]: (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        },
        [findShowsThunk.fulfilled]: (state, action) => {
            state.shows = action.payload;
            state.loading = false;
        }
    }
})

export default movieReducer.reducer;