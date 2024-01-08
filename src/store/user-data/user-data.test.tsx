import { UserState, UserData, FilmInfo } from '../../types';
import { userData } from './user-data';
import {
  loginAction,
  checkAuthAction,
  logoutAction,
  getFavorite,
  toggleFavorite,
} from '../api-actions';
import { AuthorizationStatus } from '../../const';
import films from '../../mocks/films';

describe('user-data', () => {
  let initialState: UserState;

  const mockUser: UserData = {
    email: 'test@mail.com',
    id: 1,
    avatarUrl: '1234',
    name: 'test',
    token: 'test',
  };

  const mockFavorite: FilmInfo[] = films;

  beforeEach(() => {
    initialState = {
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
  });

  describe('login', () => {
    it('should set authorizationStatus AUTHORIZED on fulfilled', () => {
      expect(
        userData.reducer(initialState, {
          type: loginAction.fulfilled.type,
          payload: mockUser,
        }).authorizationStatus
      ).toEqual(AuthorizationStatus.Auth);
    });
    it('should set email on fulfilled', () => {
      expect(
        userData.reducer(initialState, {
          type: checkAuthAction.fulfilled.type,
          payload: mockUser,
        }).email
      ).toEqual(mockUser.email);
    });
  });

  describe('logout', () => {
    it('should set authorizationStatus NO_AUTH on fulfilled', () => {
      expect(
        userData.reducer(initialState, {
          type: logoutAction.fulfilled.type,
          payload: mockUser,
        }).authorizationStatus
      ).toEqual(AuthorizationStatus.NoAuth);
    });
  });

  describe('favorite', () => {
    it('should load favorite on fulfilled', () => {
      expect(
        userData.reducer(initialState, {
          type: getFavorite.fulfilled.type,
          payload: mockFavorite,
        }).favoriteFilms
      ).toEqual(mockFavorite);
    });

    it('should add film to favorite', () => {
      expect(
        userData.reducer(initialState, {
          type: toggleFavorite.fulfilled.type,
          payload: mockFavorite[0],
        }).favoriteFilms
      ).toEqual([mockFavorite[0]]);
    });
  });
});
