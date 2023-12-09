import { createSlice } from '@reduxjs/toolkit';
import { MainFilmState } from '../../types';
import { NameSpace } from '../../const';
import { getFilmInfo, getReviews, addReview, getSimilar } from '../api-actions';
import { setError, updateFilmFavoriteStatus } from '../actions';

const initialState: MainFilmState = {
  isLoading: false,
  error: null,
  film: null,
  reviews: [],
  similar: [],
};

export const mainFilmData = createSlice({
  name: NameSpace.MainFilm,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFilmInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFilmInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.film = action.payload;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(getSimilar.fulfilled, (state, action) => {
        state.similar = action.payload;
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateFilmFavoriteStatus, (state, action) => {
        if (state.film && state.film.id === action.payload.filmId) {
          state.film.isFavorite = action.payload.isFavorite;
        }
      });
  },
});
