import FilmCardPoster from '../film-card-poster/film-card-poster';
import Button from '../button/button';

import { Link } from 'react-router-dom';
import type { FilmInfo } from '../../types';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/store';
import { getAuthorizationStatus } from '../../store/user-data/selectors';

type MainFilmProps = {
  filmInfo: FilmInfo;
  isPromo: boolean;
};

function MainFimCard({ filmInfo, isPromo }: MainFilmProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <div className={isPromo ? 'film-card__info' : 'film-card__wrap'}>
      {isPromo && (
        <FilmCardPoster
          previewImage={filmInfo.posterImage}
          alt={filmInfo.name}
        />
      )}

      <div className="film-card__desc">
        <h2 className="film-card__title">{filmInfo.name}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{filmInfo.genre}</span>
          <span className="film-card__year">{filmInfo.released}</span>
        </p>

        <div className="film-card__buttons">
          <Button className="btn btn--play film-card__button" type="button">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </Button>

          <Button className="btn btn--list film-card__button" type="button">
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
            <span>My list</span>
            <span className="film-card__count">9</span>
          </Button>

          {isAuthorized && !isPromo && (
            <Link
              to={AppRoute.AddReview.replace(':id', filmInfo.id)}
              className="btn film-card__button"
            >
              Add review
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainFimCard;
