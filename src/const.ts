import type { ReviewFields } from './types';

export enum AppRoute {
  Login = '/login',
  MyList = '/mylist',
  Movie = '/films/:id',
  Root = '/',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo',
  Similar= '/films/:id/similar',
  Reviews = '/comments/:id'
}

export enum MoviePageRoute {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const INITIAL_REVIEW_STATE: ReviewFields = {
  rating: 0,
  comment: '',
};
