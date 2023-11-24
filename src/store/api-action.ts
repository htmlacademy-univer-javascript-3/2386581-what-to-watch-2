import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch, State, FilmInfo } from '../types';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';

export const getFilmList = createAsyncThunk<
  FilmInfo[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/films', async (_arg, { extra: api }) => {
  const { data } = await api.get<FilmInfo[]>(APIRoute.Films);

  return data;
});
