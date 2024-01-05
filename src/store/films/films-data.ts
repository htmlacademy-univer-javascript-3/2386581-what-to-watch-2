import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilmsState } from '../../types';
import { NameSpace } from '../../const';
import { getFilmList, getPromo } from '../api-actions';
import {
  setError,
  updateFilmFavoriteStatus,
} from '../actions';

const DEFAULT_GENRE = 'All genres';

const initialState: FilmsState = {
  films: [],
  genre: DEFAULT_GENRE,
  filmsByGenre: [],
  isLoading: false,
  error: null,
  promo: null,
};

export const filmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    getFilmsByGenre: (state, action: PayloadAction<{ genre: string }>) => {
      const { genre } = action.payload;

      state.genre = genre;
      state.filmsByGenre =
        genre === DEFAULT_GENRE
          ? state.films
          : state.films.filter((film) => film.genre === genre);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilmList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFilmList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.films = action.payload;
        state.filmsByGenre = state.films;
      })
      .addCase(getPromo.fulfilled, (state, action) => {
        state.promo = action.payload;
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateFilmFavoriteStatus, (state, action) => {
        if (state.promo && state.promo.id === action.payload.filmId) {
          state.promo.isFavorite = action.payload.isFavorite;
        }
      });
  },
});

export const { getFilmsByGenre } = filmsData.actions;
