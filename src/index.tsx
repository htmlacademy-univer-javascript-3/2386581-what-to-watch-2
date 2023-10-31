import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mainFilm, filmCards, filmDetails } from './mocks/data.json';
import { myListFilmCards } from './mocks/my-list.json';
import { player } from './mocks/player.json';
import { reviews } from './mocks/reviews.json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      reviews={reviews}
      filmData={filmDetails}
      mainFilm={mainFilm}
      filmCards={filmCards}
      myListFilmCards={myListFilmCards}
      player={player}
    />
  </React.StrictMode>
);
