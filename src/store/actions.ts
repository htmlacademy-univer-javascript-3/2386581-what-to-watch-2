import { createAction } from '@reduxjs/toolkit';
import type { AuthorizationStatus } from '../const';

export const getFilmsByGenre = createAction<{ genre: string }>(
  'films/getFilmsByGenre'
);

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const setError = createAction<string | null>('setError');

