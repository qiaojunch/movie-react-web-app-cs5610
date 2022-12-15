import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import omdbApi from "../../common/apis/omdbApi";
import { omdbAPIKey } from "../../common/apis/omdbApiKey";

/****** create asyncThunk ********/
export const fetchAsyncMovies = createAsyncThunk (
   "omdb/fetchAsyncMovies",
   async (term) => {
    const response = await omdbApi.get(
        `?apiKey=${omdbAPIKey}&s=${term}&type=movie`
    );
    return response.data;
   }
)

export const fetchAsyncShows = createAsyncThunk (
    "omdb/fetchAsyncShows",
    async (term) => {
     const response = await omdbApi.get(
         `?apiKey=${omdbAPIKey}&s=${term}&type=series`
     );
     return response.data;
    }
 )

 export const fetchAsyncMovieOrShowDetail = createAsyncThunk (
    "omdb/fetchAsyncMovieOrShowDetail",
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

const omdbReducer = createSlice({
    name: "omdb",
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

export const { removeSelectedMovieOrShow } = omdbReducer.actions;
export const getAllMovies = (state) => state.omdb.movies;
export const getAllShows = (state) => state.omdb.shows;
export const getSelectedMovieOrShow = (state) => state.omdb.selectedMovieOrShow;
export default omdbReducer.reducer;