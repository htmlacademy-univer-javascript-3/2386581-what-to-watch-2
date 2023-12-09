import { createSlice } from '@reduxjs/toolkit';
import { FilmsState } from '../../types';
import { NameSpace } from '../../const';
import {
  getFilmList,
  getPromo,
} from '../api-actions';
import { getFilmsByGenre, setError, updateFilmFavoriteStatus } from '../actions';

const DEFAULT_GENRE = 'All genres';

const initialState: FilmsState = {
  films: [],
  genre: '',
  filmsByGenre: [],
  isLoading: false,
  error: null,
  promo: null,
};

export const filmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
