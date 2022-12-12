import {createSlice } from "@reduxjs/toolkit";
import userArray from "./user.json"

const userSlice = createSlice({
    name: "user",
    initialState: userArray
});

export default userSlice.reducer;