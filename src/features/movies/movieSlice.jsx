import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import omdbApi from "../../common/apis/omdbApi";
import { omdbAPIKey } from "../../common/apis/omdbApiKey";

/****** create asyncThunk ********/
export const fetchAsyncMovies = createAsyncThunk (
   "movies/fetchAsyncMovies",
   async (term) => {
    const response = await omdbApi.get(
        `?apiKey=${omdbAPIKey}&s=${term}&type=movie`
    );
    return response.data;
   }
)

export const fetchAsyncShows = createAsyncThunk (
    "movies/fetchAsyncShows",
    async (term) => {
     const response = await omdbApi.get(
         `?apiKey=${omdbAPIKey}&s=${term}&type=series`
     );
     return response.data;
    }
 )

 export const fetchAsyncMovieOrShowDetail = createAsyncThunk (
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
     const response = await omdbApi.get(
         `?apiKey=${omdbAPIKey}&i=${id}&Plot=full`);
     return response.data;
    }
 )

/******  create movie reducer  ********/ 
const initialState = {
    movies: [],
    shows: [],
    selectedMovieOrShow: {},
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state, { payload }) => {
            state.selectedMovieOrShow = {};
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched movies successfully!");
            state.movies = payload;
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected fetching movies");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched movies successfully!");
            state.shows = payload;
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched movie or show successfully!");
            state.selectedMovieOrShow = payload;
        },
    }
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;