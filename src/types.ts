import { store } from './store';
import { AuthorizationStatus } from './const';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type AuthData = {
  login: string;
  password: string;
};

export interface MainPageInitialState {
  authorizationStatus: AuthorizationStatus;
  films: FilmInfo[];
  genre: string;
  filmsByGenre: FilmInfo[];
  isLoading: boolean;
  error: string | null;
  // film: FilmInfo;
  // promo: FilmInfo;
}

export interface FilmPreview {
  id: string;
  previewImage: string;
  name: string;
  previewVideoLink?: string;
  genre: string;
}

export interface FilmInfo extends FilmPreview {
  released?: number;
  rating?: number;
  scoresCount?: number;
  description?: string;
  director?: string;
  starring?: string[];
  runtime?: string;
  // reviews: Review[];
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
  text: string;
}

export interface Player {
  previewVideoLink?: string;
  posterImage: string;
  name?: string;
}
