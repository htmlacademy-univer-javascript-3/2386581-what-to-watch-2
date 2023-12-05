import { store } from './store';
import { AuthorizationStatus } from './const';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type UserData = {
  id: number;
  avatarUrl: string;
  email: string;
  token: string;
  name: string;
};

export type AuthData = {
  login: string;
  password: string;
};

export interface UserState extends UserData, AuthData, UserProcess {
  favoriteFilms: FilmInfo[];
  isLoading: boolean;
  error: string | null;
}

export interface FilmsState {
  films: FilmInfo[];
  genre: string;
  filmsByGenre: FilmInfo[];
  isLoading: boolean;
  error: string | null;
  promo: FilmInfo | null;
}

export interface MainFilmState {
  isLoading: boolean;
  error: string | null;
  film: FilmInfo | null;
  reviews: Review[];
  similar: FilmInfo[];
}

export interface MainPageInitialState {
  authorizationStatus: AuthorizationStatus;
  films: FilmInfo[];
  genre: string;
  filmsByGenre: FilmInfo[];
  isFilmsLoading: boolean;
  isFilmLoading: boolean;
  error: string | null;
  film: FilmInfo | null;
  promo: FilmInfo | null;
  reviews: Review[];
  similar: FilmInfo[];
}

export interface FilmPreview {
  id: string;
  previewImage: string;
  name: string;
  previewVideoLink?: string;
  genre: string;
}

export interface FilmInfo extends FilmPreview {
  backgroundColor: string;
  backgroundImage: string;
  description: string;
  director: string;
  isFavorite: boolean;
  posterImage: string;
  rating: number;
  released: number;
  runTime: number;
  scoresCount: number;
  starring: string[];
  videoLink: string;
}

export interface MainFim {
  name: string;
  genre: string;
  release: number;
}

export interface Review {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}
export interface ReviewFields {
  rating: number;
  comment: string;
}

export interface Player {
  previewVideoLink?: string;
  posterImage: string;
  name?: string;
}
