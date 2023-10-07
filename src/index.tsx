import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mainFilm, filmCards } from './mocks/data.json';
import { myListFilmCards } from './mocks/my-list.json';
import { player } from './mocks/player.json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      mainFilm={mainFilm}
      filmCards={filmCards}
      myListFilmCards={myListFilmCards}
      player={player}
    />
  </React.StrictMode>
);
