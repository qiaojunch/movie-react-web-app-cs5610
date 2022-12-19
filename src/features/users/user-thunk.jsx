import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./user-service";

export const findUserByIdThunk = createAsyncThunk(
    'findUserById',
    async (uid) => await service.findUserById(uid)
)

export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await service.findAllUsers()
)

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await service.register(user)
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await service.login(user)
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await service.logout()
)

export const profileThunk = createAsyncThunk(
    'profile',
    async () => await service.profile()
)

export const deleteUserThunk = createAsyncThunk(
    'deleteUser',
    async (uid) => await service.deleteUser(uid)
)

export const updateUserThunk = createAsyncThunk(
    'updateUser',
    async (updates) => await service.updateUser(updates)
)