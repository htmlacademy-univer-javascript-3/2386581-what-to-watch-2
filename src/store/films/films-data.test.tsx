import { FilmsState } from '../../types';
import { filmsData } from './films-data';
import { getFilmList, getPromo } from '../api-actions';

import films from '../../mocks/films';

const mockPromo = films[0];
const mockFilms = films;

const DEFAULT_GENRE = 'All genres';

describe('film-data', () => {
  let initialState: FilmsState;

  beforeEach(() => {
    initialState = {
      films: [],
      genre: DEFAULT_GENRE,
      filmsByGenre: [],
      isLoading: false,
      error: null,
      promo: null,
    };
  });

  describe('getFilms test', () => {
    it('should set isLoading on pending', () => {
      expect(
        filmsData.reducer(initialState, {
          type: getFilmList.pending.type,
          payload: mockFilms,
        }).isLoading
      ).toEqual(true);
    });
    it('should load films on fulfilled', () => {
      expect(
        filmsData.reducer(initialState, {
          type: getFilmList.fulfilled.type,
          payload: mockFilms,
        }).films
      ).toEqual(mockFilms);
    });
    it('should set isLoading false on fulfilled', () => {
      expect(
        filmsData.reducer(initialState, {
          type: getFilmList.fulfilled.type,
          payload: mockFilms,
        }).isLoading
      ).toEqual(false);
    });
  });

  describe('getPromo', () => {
    it('should load similar films on fulfilled', () => {
      expect(
        filmsData.reducer(initialState, {
          type: getPromo.fulfilled.type,
          payload: mockPromo,
        }).promo
      ).toEqual(mockPromo);
    });
  });
});
