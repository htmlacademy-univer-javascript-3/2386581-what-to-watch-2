import { MainFilmState } from '../../types';
import { mainFilmData } from './main-film-data';
import { getFilmInfo, getReviews, getSimilar } from '../api-actions';

import reviews from '../../mocks/reviews';
import films from '../../mocks/films';

const mockFilm = films[0];
const mockFilms = films;
const mockReviews = reviews;

describe('film-data', () => {
  let initialState: MainFilmState;

  beforeEach(() => {
    initialState = {
      isLoading: false,
      error: null,
      film: null,
      reviews: [],
      similar: [],
    };
  });

  describe('getFilms test', () => {
    it('should set isLoading on pending', () => {
      expect(
        mainFilmData.reducer(initialState, {
          type: getFilmInfo.pending.type,
          payload: mockFilm,
        }).isLoading
      ).toEqual(true);
    });
    it('should load film on fulfilled', () => {
      expect(
        mainFilmData.reducer(initialState, {
          type: getFilmInfo.fulfilled.type,
          payload: mockFilm,
        }).film
      ).toEqual(mockFilm);
    });
    it('should set isLoading false on fulfilled', () => {
      expect(
        mainFilmData.reducer(initialState, {
          type: getFilmInfo.fulfilled.type,
          payload: mockFilm,
        }).isLoading
      ).toEqual(false);
    });
  });

  describe('getSimilar test', () => {
    it('should load similar films on fulfilled', () => {
      expect(
        mainFilmData.reducer(initialState, {
          type: getSimilar.fulfilled.type,
          payload: mockFilms,
        }).similar
      ).toEqual(mockFilms);
    });
  });

  describe('getReviews test', () => {
    it('should load reviews on fulfilled', () => {
      expect(
        mainFilmData.reducer(initialState, {
          type: getReviews.fulfilled.type,
          payload: mockReviews,
        }).reviews
      ).toMatchObject(mockReviews);
    });
  });
});
