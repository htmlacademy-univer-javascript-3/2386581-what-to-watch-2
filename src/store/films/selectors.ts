import { NameSpace } from '../../const';
import type { State, FilmInfo, FilmPreview } from '../../types';

export const getFilms = (state: State): FilmPreview[] => state[NameSpace.Films].films;
export const getFilmsByGenre = (state: State): FilmPreview[] =>
  state[NameSpace.Films].filmsByGenre;
export const getIsLoading = (state: State): boolean =>
  state[NameSpace.Films].isLoading;
export const getGenre = (state: State): string => state[NameSpace.Films].genre;
export const getPromo = (state: State): FilmInfo | null => state[NameSpace.Films].promo;
export const getFilmsError = (state: State): string | null => state[NameSpace.Films].error;
