import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./comments-service";

export const createCommentThunk = createAsyncThunk(
    'createComment',
    async (comment) => service.createComment(comment)
)

export const findCommentsByMovieThunk = createAsyncThunk(
    'findCommentsByMoive',
    async (imdbID) => service.findCommentsByMovie(imdbID)
)

export const findCommentsByAuthorThunk = createAsyncThunk(
    'findCommentsByAuthor',
    async (authorId) => service.findCommentsByAuthor(authorId)
)