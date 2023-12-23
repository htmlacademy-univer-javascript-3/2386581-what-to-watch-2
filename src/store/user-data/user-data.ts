import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../types';
import { NameSpace, AuthorizationStatus } from '../../const';
import {
  loginAction,
  checkAuthAction,
  logoutAction,
  getFavorite,
  toggleFavorite,
} from '../api-actions';
import { setError } from '../actions';

const initialState: UserState = {
  isLoading: false,
  error: null,
  id: 0,
  avatarUrl: '',
  email: '',
  name: '',
  token: '',
  login: '',
  password: '',
  favoriteFilms: [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        if (action?.payload) {
          state.email = action.payload.email;
          state.name = action.payload.name;
          state.avatarUrl = action.payload.avatarUrl;
          state.token = action.payload.token;
          state.authorizationStatus = AuthorizationStatus.Auth;
        } else {
          state.authorizationStatus = AuthorizationStatus.NoAuth;
        }
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.avatarUrl = '';
        state.email = '';
        state.name = '';
        state.token = '';
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(getFavorite.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        if (
          !state.favoriteFilms.some((film) => film.id === action.payload.id)
        ) {
          state.favoriteFilms.push(action.payload);
        } else {
          state.favoriteFilms = state.favoriteFilms.filter((film) => film.id !== action.payload.id);
        }
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      });
  },
});
