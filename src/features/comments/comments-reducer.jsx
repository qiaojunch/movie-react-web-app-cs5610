import { createSlice } from "@reduxjs/toolkit";
import { createCommentThunk, deleteCommentByIdThunk, findCommentsByAuthorThunk, findCommentsByMovieThunk } from "./comments-thunk";

const initialState = {
    comments: [],
    loading: true,
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
        },
        [deleteCommentByIdThunk.fulfilled]: (state, action) => {
            // delete only returns uid in this case
            state.loading = false;
        },
    }
})

export default commentReducer.reducer;