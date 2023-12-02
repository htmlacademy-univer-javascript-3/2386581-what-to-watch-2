import { createReducer } from '@reduxjs/toolkit';
import { getFilmsByGenre, requireAuthorization, setError } from './actions';
import {
  getFilmList,
  getFilmInfo,
  getPromo,
  getReviews,
  loginAction,
  getSimilar
} from './api-actions';
import type { MainPageInitialState } from '../types';
import { AuthorizationStatus } from '../const';

const DEFAULT_GENRE = 'All genres';

const initialState: MainPageInitialState = {
  films: [],
  genre: DEFAULT_GENRE,
  filmsByGenre: [],
  isFilmsLoading: false,
  isFilmLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  film: null,
  promo: null,
  similar: [],
  reviews: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilmsByGenre, (state, action) => {
      const { genre } = action.payload;

      state.genre = genre;
      state.filmsByGenre =
        genre === DEFAULT_GENRE
          ? state.films
          : state.films.filter((film) => film.genre === genre);
    })
    .addCase(getFilmList.pending, (state) => {
      state.isFilmsLoading = true;
    })
    .addCase(getFilmList.fulfilled, (state, action) => {
      state.isFilmsLoading = false;
      state.films = action.payload;
      state.filmsByGenre = state.films;
    })
    .addCase(getFilmInfo.pending, (state) => {
      state.isFilmLoading = true;
    })
    .addCase(getFilmInfo.fulfilled, (state, action) => {
      state.film = action.payload;
      state.isFilmLoading = false;
    })
    .addCase(getPromo.fulfilled, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(getSimilar.fulfilled, (state, action) => {
      state.similar = action.payload;
    })
    .addCase(getReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loginAction.pending, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(loginAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
