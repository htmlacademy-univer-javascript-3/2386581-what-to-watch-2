import type { ReviewFields } from './types';

export enum AppRoute {
  Login = '/login',
  MyList = '/mylist',
  Movie = '/films/:id',
  Root = '/',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const INITIAL_REVIEW_STATE: ReviewFields = {
  rating: 0,
  text: '',
};
