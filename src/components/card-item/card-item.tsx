import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import type { FilmPreview } from '../../types';
import VideoPlayer from '../video-player/video-player';

type CardItemProps = {
  filmPreview: FilmPreview;
  isPlayerActive: boolean;
  onHover: (id: string) => void;
};

function CardItem({
  filmPreview,
  isPlayerActive,
  onHover,
}: CardItemProps): JSX.Element {
  const { id, previewImage, previewVideoLink, name } = filmPreview;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onHover(id)}
      onMouseLeave={() => onHover('')}
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
        <Link
          to={AppRoute.Movie.replace(':id', id)}
          className="small-film-card__link"
        >
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default CardItem;
