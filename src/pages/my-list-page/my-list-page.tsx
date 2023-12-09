import FilmList from '../../components/film-list/film-list';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Loader from '../../components/loader/loader';

import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { getFavorite } from '../../store/api-actions';
import { getFavoriteList } from '../../store/user-data/selectors';
import { useEffect } from 'react';

function MyListPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteList = useAppSelector(getFavoriteList);

  useEffect(() => {
    dispatch(getFavorite());
  }, [favoriteList, dispatch]);

  if (!favoriteList) {
    return <Loader />;
  }

  return (
    <div className="user-page">
      <Header className="user-page__head">
        <h1 className="page-title user-page__title">
          My list{' '}
          <span className="user-page__film-count">{favoriteList.length}</span>
        </h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList filmsByGenre={favoriteList} />
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
