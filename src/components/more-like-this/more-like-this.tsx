import FilmList from '../film-list/film-list';

import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { useEffect } from 'react';
import { getSimilar } from '../../store/api-actions';

type MoreLikeThisProps = {
  filmId: string;
};

const MORE_FILMS_QUNATITY = 4;

function MoreLikeThis({ filmId }: MoreLikeThisProps): JSX.Element {
  const dispatch = useAppDispatch();
  const similar = useAppSelector((state) => state.similar);

  // useEffect(() => {
  //   dispatch(getFilmList());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getSimilar(filmId));
  }, [dispatch, filmId]);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmList maxFilms={MORE_FILMS_QUNATITY} filmsByGenre={similar} />
    </section>
  );
}

export default MoreLikeThis;
