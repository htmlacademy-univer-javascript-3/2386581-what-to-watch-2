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
