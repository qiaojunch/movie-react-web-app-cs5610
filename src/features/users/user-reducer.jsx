import {createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, registerThunk, profileThunk, findAllUsersThunk, findUserByIdThunk } from "./user-thunk";


const initialState = {
    users: [],
    loading: false,
    currentUser: null,
    publicProfile: null
}

const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: {
        [loginThunk.pending]: (state, action) => {
            state.loading = true;
            console.log("login loading");
        },
        [loginThunk.rejected]: (state, action) => {
            state.loading = true;
            console.log("login rejected");
        },
        [loginThunk.fulfilled]: (state, action) => {
            console.log("login: ", action.payload)
            state.currentUser = action.payload
            state.loading = false
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
        },
    }
});

export default userSlice.reducer;