import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./follow-service"

export const followUserThunk = createAsyncThunk(
    'followUser',
    async (follow) => await service.followUser(follow)
)

export const findFollowersThunk = createAsyncThunk(
    'findFollowers',
    async (followed) => await service.findFollowers(followed)
)

export const findFollowingThunk = createAsyncThunk(
    'findFollowing',
    async (follower) => await service.followUser(follower)
)