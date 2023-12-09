import { NameSpace } from '../../const';
import type { State, FilmPreview } from '../../types';

export const getAvatarUrl = (state: State): string =>
  state[NameSpace.User].avatarUrl;
export const getUserName = (state: State): string => state[NameSpace.User].name;
export const getAuthorizationStatus = (state: State): string =>
  state[NameSpace.User].authorizationStatus;
export const getUserError = (state: State): string | null =>
  state[NameSpace.User].error;
export const getFavoriteList = (state: State): FilmPreview[] | null =>
  state[NameSpace.User].favoriteFilms;
