import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import data from './data.json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App filmCards={data.filmCards} />
  </React.StrictMode>
);
