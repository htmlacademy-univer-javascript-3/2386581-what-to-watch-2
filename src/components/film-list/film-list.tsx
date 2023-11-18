import { useState, useEffect, useRef } from 'react';

import CardItem from '../card-item/card-item';
import type { FilmInfo, FilmPreview } from '../../types';
import { filmCards } from '../../mocks/data.json';

type CardsFilmProps = {
  maxFilms?: number;
  moreLikeThisGenre?: string;
  filmsByGenre: FilmInfo[];
};

function FilmList({
  maxFilms = filmCards.length,
  moreLikeThisGenre,
  filmsByGenre,
}: CardsFilmProps): JSX.Element {
  const [activeFilmCard, setActiveFilmCard] = useState<string>('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const filteredFilms: FilmPreview[] = moreLikeThisGenre
    ? filmCards.filter((film) => film.genre === moreLikeThisGenre)
    : filmsByGenre;

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
