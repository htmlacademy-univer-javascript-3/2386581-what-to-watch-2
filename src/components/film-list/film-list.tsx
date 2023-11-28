import CardItem from '../card-item/card-item';

import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import type { FilmInfo, FilmPreview } from '../../types';
import { getFilmList } from '../../store/api-actions';
import { useAppSelector, useAppDispatch } from '../../hooks/store';

type CardsFilmProps = {
  maxFilms?: number;
  moreLikeThisGenre?: string;
  filmsByGenre?: FilmInfo[];
};

function FilmList({
  maxFilms,
  moreLikeThisGenre,
  filmsByGenre,
}: CardsFilmProps): JSX.Element {
  const [activeFilmCard, setActiveFilmCard] = useState<string>('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const dispatch = useAppDispatch();
  const filmList = useAppSelector((state) => state.films);

  const filteredFilms: FilmPreview[] = moreLikeThisGenre
    ? filmList.filter((film) => film.genre === moreLikeThisGenre)
    : filmsByGenre || filmList;

  const handleActiveFilmCard = (filmId: string) => {
    if (filmId) {
      timeoutRef.current = setTimeout(() => setActiveFilmCard(filmId), 1000);
    } else if (timeoutRef.current) {
      setActiveFilmCard('');
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    },
    []
  );

  useLayoutEffect(() => {
    dispatch(getFilmList());
  }, [dispatch]);

  return (
    <div className="catalog__films-list">
      {filteredFilms.slice(0, maxFilms).map((card) => (
        <CardItem
          key={card.id}
          filmPreview={card}
          isPlayerActive={activeFilmCard === card.id}
          onHover={handleActiveFilmCard}
        />
      ))}
    </div>
  );
}

export default FilmList;
