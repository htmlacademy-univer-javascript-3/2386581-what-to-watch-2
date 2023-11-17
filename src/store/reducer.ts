import { createReducer } from '@reduxjs/toolkit';
import { getFilmsByGenre } from './action';
import { filmCards } from '../mocks/data.json';

const DEFAULT_GENRE = 'All genres';

const initialState = {
  films: filmCards,
  genre: DEFAULT_GENRE,
  filmsByGenre: filmCards,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getFilmsByGenre, (state, action) => {
    const { genre } = action.payload;

    state.genre = genre;
    state.filmsByGenre =
      genre === DEFAULT_GENRE
        ? filmCards
        : filmCards.filter((film) => film.genre === genre);
  });
});

export { reducer };
