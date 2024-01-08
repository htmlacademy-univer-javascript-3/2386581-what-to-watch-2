import CardItem from '../card-item/card-item';

import { useState, useEffect, useRef } from 'react';
import type { FilmPreview } from '../../types';
import Loader from '../loader/loader';

type CardsFilmProps = {
  maxFilms?: number;
  filmsByGenre?: FilmPreview[];
};

function FilmList({
  maxFilms,
  filmsByGenre,
}: CardsFilmProps): JSX.Element {
  const [activeFilmCard, setActiveFilmCard] = useState<string>('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  if (!filmsByGenre) {
    return <Loader />;
  }

  return (
    <div className="catalog__films-list">
      {filmsByGenre.slice(0, maxFilms).map((card) => (
        <CardItem
          key={card.id}
          filmPreview={card}
          isPlayerActive={activeFilmCard === card.id}
          handleCardHover={handleActiveFilmCard}
        />
      ))}
    </div>
  );
}

export default FilmList;
