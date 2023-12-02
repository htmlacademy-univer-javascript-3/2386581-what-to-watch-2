import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from '../../pages/main-page/main-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import MoviePage from '../../pages/movie-page/movie-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import PlayerPage from '../../pages/player-page/player-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import ErrorPage from '../../pages/error-page/error-page';
import PrivateRoute from '../privat-route/privat-route';

import { Player } from '../../types';
import { AppRoute } from '../../const';

type AppProps = {
  player: Player;
};

function App({
  player,
}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage />}
        />
        <Route path={AppRoute.Login} element={<SignInPage />} />
        <Route
          path={AppRoute.Movie}
          element={<MoviePage />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewPage />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage player={player} />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
