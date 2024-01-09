import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  AppDispatch,
  State,
  FilmInfo,
  AuthData,
  UserData,
  Review,
  FilmPreview,
} from '../types';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../const';
import { saveToken, removeToken } from '../services/token';
import { requireAuthorization, updateFilmFavoriteStatus } from './actions';

export const getFilmList = createAsyncThunk<
  FilmInfo[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/films/getFilmList', async (_arg, { extra: api }) => {
  const { data } = await api.get<FilmInfo[]>(APIRoute.Films);

  return data;
});

export const getFilmInfo = createAsyncThunk<
  FilmInfo,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/films/id', async (filmId: string, { extra: api }) => {
  const { data } = await api.get<FilmInfo>(`/films/${filmId}`);

  return data;
});

export const getPromo = createAsyncThunk<
  FilmInfo,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/films/promo', async (_arg, { extra: api }) => {
  const { data } = await api.get<FilmInfo>(APIRoute.Promo);

  return data;
});

export const getSimilar = createAsyncThunk<
  FilmInfo[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/films/id/similar', async (filmId: string, { extra: api }) => {
  const { data } = await api.get<FilmInfo[]>(
    APIRoute.Similar.replace(':id', filmId)
  );

  return data;
});

export const getReviews = createAsyncThunk<
  Review[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/comments/getReviews', async (filmId: string, { extra: api }) => {
  const { data } = await api.get<Review[]>(
    APIRoute.Reviews.replace(':id', filmId)
  );

  return data;
});

export const addReview = createAsyncThunk<
  Review,
  { comment: string; rating: number; filmId: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  '/comments/addReview',
  async ({ comment, rating, filmId }, { extra: api }) => {
    const { data } = await api.post<Review>(APIRoute.Reviews.replace(':id', filmId), {
      comment,
      rating,
    });

    return data;
  });

export const checkAuthAction = createAsyncThunk<
  UserData | null,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<UserData>(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));

    return data;
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }

  return null;
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(checkAuthAction());
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  removeToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export const getFavorite = createAsyncThunk<
  FilmPreview[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/getFavorite', async (_arg, { extra: api }) => {
  const { data } = await api.get<FilmPreview[]>(APIRoute.Favorite);

  return data;
});

export const toggleFavorite = createAsyncThunk<
  FilmPreview,
  { filmId: string; status: boolean },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/toggleFavorite',
  async ({ filmId, status }, { dispatch, extra: api }) => {
    let requestStatus = 0;
    if (status) {
      requestStatus = 1;
    }
    const { data } = await api.post<FilmPreview>(
      `${APIRoute.AddFavorite.replace(':filmId', filmId)}${requestStatus}`,
      {
        filmId,
        status,
      }
    );

    dispatch(updateFilmFavoriteStatus({ filmId, isFavorite: status }));

    return data;
  }
);
