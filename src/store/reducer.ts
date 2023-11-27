import { createReducer } from '@reduxjs/toolkit';
import { getFilmsByGenre, requireAuthorization, setError } from './actions';
import { getFilmList, loginAction } from './api-actions';
import type { MainPageInitialState } from '../types';
import { AuthorizationStatus } from '../const';

const DEFAULT_GENRE = 'All genres';

const initialState: MainPageInitialState = {
  films: [],
  genre: DEFAULT_GENRE,
  filmsByGenre: [],
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
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
      state.isLoading = true;
    })
    .addCase(getFilmList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.films = action.payload;
      state.filmsByGenre = state.films;
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
