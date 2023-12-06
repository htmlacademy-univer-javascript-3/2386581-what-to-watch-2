import { NameSpace } from '../../const';
import type { State, FilmInfo, Review } from '../../types';

export const getFilmInfo = (state: State): FilmInfo | null =>
  state[NameSpace.MainFilm].film;
export const getReviews = (state: State): Review[] =>
  state[NameSpace.MainFilm].reviews;
export const getSimilar = (state: State): FilmInfo[] =>
  state[NameSpace.MainFilm].similar;
export const getMainFilmError = (state: State): string | null =>
  state[NameSpace.MainFilm].error;
