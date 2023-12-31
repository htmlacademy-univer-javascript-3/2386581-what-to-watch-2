import GenreList from '../genre-list/genre-list';
import FilmList from '../film-list/film-list';
import Button from '../button/button';
import Loader from '../loader/loader';

import { useState, useEffect, useLayoutEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { getFilmList } from '../../store/api-actions';
import { getFilmsByGenre, getIsLoading, getFilms } from '../../store/films/selectors';

const DEFAULT_LIST_LENGTH = 8;

function Catalog(): JSX.Element {
  const dispatch = useAppDispatch();
  const filmsByGenre = useAppSelector(getFilmsByGenre);
  const filmList = useAppSelector(getFilms);
  const isLoading = useAppSelector(getIsLoading);

  const [maxFilms, setMaxFilms] = useState(DEFAULT_LIST_LENGTH);

  const isButtonVisible = filmsByGenre.length > maxFilms;

  const handleClick = () => {
    setMaxFilms((prev) => prev + DEFAULT_LIST_LENGTH);
  };

  useEffect(
    () => () => {
      setMaxFilms(DEFAULT_LIST_LENGTH);
    },
    [filmsByGenre]
  );

  useLayoutEffect(() => {
    dispatch(getFilmList());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreList filmsList={filmList} />

      <FilmList filmsByGenre={filmsByGenre} maxFilms={maxFilms} />

      {isButtonVisible && (
        <div className="catalog__more">
          <Button
            className="catalog__button"
            type="button"
            onClick={handleClick}
          >
            Show more
          </Button>
        </div>
      )}
    </section>
  );
}

export default Catalog;
