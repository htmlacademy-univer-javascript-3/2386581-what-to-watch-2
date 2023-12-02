import ErrorMessage from './components/error-message/error-message';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { filmCards } from './mocks/data.json';
import { player } from './mocks/player.json';
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
        myListFilmCards={filmCards}
        player={player}
      />
    </Provider>
  </React.StrictMode>
);
