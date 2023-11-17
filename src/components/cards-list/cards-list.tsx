import { useState, useEffect, useRef } from 'react';
import CardItem from '../../components/card-item/card-item';
import type { FilmPreview } from '../../types';
import { filmCards } from '../../mocks/data.json';

type CardsFilmProps = {
  maxFilms?: number;
  genre?: string;
};

function CardsList({
  maxFilms = filmCards.length,
  genre,
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

  const filteredFilms: FilmPreview[] = genre
    ? filmCards.filter((film) => film.genre === genre)
    : filmCards;

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

export default CardsList;
