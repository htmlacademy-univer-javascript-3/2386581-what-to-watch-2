import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import type { FilmPreview } from '../../types';
import VideoPlayer from '../video-player/video-player';

type CardItemProps = {
  filmPreview: FilmPreview;
  isPlayerActive: boolean;
  onCardHover: (id: string) => void;
};

function CardItem({
  filmPreview,
  isPlayerActive,
  onCardHover,
}: CardItemProps): JSX.Element {
  const { id, previewImage, previewVideoLink, name } = filmPreview;

  return (
    <article
      data-testid="card-item"
      className="small-film-card catalog__films-card"
      onMouseOver={() => onCardHover(id)}
      onMouseLeave={() => onCardHover('')}
    >
      <Link
        to={AppRoute.Movie.replace(':id', id)}
        style={{ textDecoration: 'none', color: '#c9b37e' }}
      >
        {isPlayerActive ? (
          <VideoPlayer
            previewVideoLink={previewVideoLink}
            posterImage={previewImage}
          />
        ) : (
          <div className="small-film-card__image">
            <img src={previewImage} alt={name} width="280" height="175" />
          </div>
        )}
        <h3 className="small-film-card__title">
          <div className="small-film-card__link">{name}</div>
        </h3>
      </Link>
    </article>
  );
}

export default CardItem;
