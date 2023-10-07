import { useState } from 'react';
import CardItem from '../../components/card-item/card-item';
import type { FilmCard } from '../../types';

type CardsFilmProps = {
  filmCardsList: FilmCard[];
};

function CardsList({ filmCardsList }: CardsFilmProps): JSX.Element {
  const [, setActiveFilmCard] = useState<string>('');

  return (
    <div className="catalog__films-list">
      {filmCardsList.map((card) => (
        <CardItem key={card.id} filmCard={card} onHover={setActiveFilmCard} />
      ))}
    </div>
  );
}

export default CardsList;
