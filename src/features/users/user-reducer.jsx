import {createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, registerThunk, profileThunk, findAllUsersThunk, findUserByIdThunk, updateUserThunk } from "./user-thunk";


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
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
        },
        [loginThunk.rejected]: (state, action) => {
            console.log("login rejected");
            state.currentUser = null
            state.loading = false
        },
        [registerThunk.fulfilled]: (state, action) => {
            console.log("register fulfilled");
            state.currentUser = action.payload
            state.loading = false
        },
        [registerThunk.rejected]: (state, action) => {
            console.log("register rejected");
            state.currentUser = null
            state.loading = false
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null;
            state.loading = false;
        },
        [logoutThunk.pending]: (state, action) => {
            console.log("logout pending");
            state.currentUser = null;
            state.loading = false;
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
        },
        [profileThunk.rejected]: (state, action) => {
            console.log("profile rejected");
            state.currentUser = null
            state.loading = false
        },
        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.publicProfile = action.payload
        },
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
            state.loading = false
        },
        [updateUserThunk.fulfilled]: (state, action) => {
            state.loading = false
            state.currentUser = action.payload
        },
        [updateUserThunk.pending]: (state, action) => {
            state.loading = true
            console.log("***update user pending***");
        },
        [updateUserThunk.fulfilled]: (state, action) => {
            state.loading = false
            console.log("***update user rejected!***");
        },
    }
});

export default userSlice.reducer;