import { useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks/store';
import GenreList from '../genre-list/genre-list';
import FilmList from '../film-list/film-list';
import Button from '../button/button';

const DEFAULT_LIST_LENGTH = 8;

function Catalog(): JSX.Element {
  const filmsByGenre = useAppSelector((state) => state.filmsByGenre);
  const filmList = useAppSelector((state) => state.films);

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
