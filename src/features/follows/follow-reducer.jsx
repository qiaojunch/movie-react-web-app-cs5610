import { createSlice } from "@reduxjs/toolkit";
import { followUserThunk } from "./follow-thunk";

const initialState = {
    following: [],
    followers: []
}
const followReducer = createSlice({
    name: 'follows',
    initialState,
    extraReducers: {
        [followUserThunk.fulfilled]: (state, action) => {
            state.followers.push(action.payload)
        },
        [followUserThunk.pending]: (state, action) => {
            console.log("follow user thunk pending");
        },
        [followUserThunk.rejected]: (state, action) => {
            console.log("follow user thunk rejected");
        },
    }
})

export default followReducer.reducer;