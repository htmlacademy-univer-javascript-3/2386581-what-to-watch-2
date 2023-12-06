import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userData } from './user-data/user-data';
import { filmsData } from './films/films-data';
import { mainFilmData } from './main-film-data/main-film-data';

export const rootReducer = combineReducers({
  [NameSpace.MainFilm]: mainFilmData.reducer,
  [NameSpace.Films]: filmsData.reducer,
  [NameSpace.User]: userData.reducer,
});
