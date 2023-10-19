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
  const { id, imgPath, previewVideoLink, title } = filmPreview;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onHover(id)}
      onMouseLeave={() => onHover('')}
    >
      {isPlayerActive ? (
        <VideoPlayer
          videoLink={previewVideoLink}
          posterImage={imgPath}
        />
      ) : (
        <div className="small-film-card__image">
          <img src={imgPath} alt={title} width="280" height="175" />
        </div>
      )}
      <h3 className="small-film-card__title">
        <Link
          to={AppRoute.Movie.replace(':id', id)}
          className="small-film-card__link"
        >
          {title}
        </Link>
      </h3>
    </article>
  );
}

export default CardItem;
