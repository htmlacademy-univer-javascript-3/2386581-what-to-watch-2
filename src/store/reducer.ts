import { createReducer } from '@reduxjs/toolkit';
import { getFilmsByGenre } from './action';
import { getFilmList } from './api-action';
import type { MainPageInitialState } from '../types';

const DEFAULT_GENRE = 'All genres';

const initialState: MainPageInitialState = {
  films: [],
  genre: DEFAULT_GENRE,
  filmsByGenre: [],
  isLoading: false,
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
    });
});

export { reducer };
