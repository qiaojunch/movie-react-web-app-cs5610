import { createSlice } from "@reduxjs/toolkit";
import { createCommentThunk, findCommentsByAuthorThunk, findCommentsByMovieThunk } from "./comments-thunk";

const initialState = {
    comments: []
}

const commentReducer = createSlice({
    name: 'comments',
    initialState,
    extraReducers: {
        [createCommentThunk.fulfilled]: (state, action) => {
            state.comments.push(action.payload)
        },
        [findCommentsByMovieThunk.fulfilled]: (state, action) => {
            state.comments = action.payload
        },
        [findCommentsByAuthorThunk.fulfilled]: (state, action) => {
            state.comments = action.payload
        }
    }
})

export default commentReducer.reducer;