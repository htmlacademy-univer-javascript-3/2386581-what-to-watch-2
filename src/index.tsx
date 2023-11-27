import ErrorMessage from './components/error-message/error-message';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mainFilm, filmCards, filmDetails } from './mocks/data.json';
import { player } from './mocks/player.json';
import { reviews } from './mocks/reviews.json';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction } from './store/api-actions';

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        filmCards={filmCards}
        reviews={reviews}
        filmData={filmDetails}
        mainFilm={mainFilm}
        myListFilmCards={filmCards}
        player={player}
      />
    </Provider>
  </React.StrictMode>
);
