import type { FilmCard } from '../../types';

type CardItemProps = {
  filmCard: FilmCard;
};

function CardItem({ filmCard }: CardItemProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={filmCard.imgPath}
          alt={filmCard.title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {filmCard.title}
        </a>
      </h3>
    </article>
  );
}

export default CardItem;
