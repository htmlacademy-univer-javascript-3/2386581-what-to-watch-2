import { store } from './store';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface MainPageInitialState {
  films: FilmInfo[];
  genre: string;
  filmsByGenre: FilmInfo[];
  isLoading: boolean;
  // film: FilmInfo;
  // promo: FilmInfo;
  // isFilmLoading: boolean;
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
