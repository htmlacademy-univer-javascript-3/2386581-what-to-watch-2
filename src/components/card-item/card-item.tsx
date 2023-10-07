import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import type { FilmCard } from '../../types';

type CardItemProps = {
  filmCard: FilmCard;
  onHover: (id: string) => void;
};

function CardItem({ filmCard, onHover }: CardItemProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => onHover(filmCard.id)}>
      <div className="small-film-card__image">
        <img
          src={filmCard.imgPath}
          alt={filmCard.title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link
          to={AppRoute.Movie.replace(':id', filmCard.id)}
          className="small-film-card__link"
        >
          {filmCard.title}
        </Link>
      </h3>
    </article>
  );
}

export default CardItem;
