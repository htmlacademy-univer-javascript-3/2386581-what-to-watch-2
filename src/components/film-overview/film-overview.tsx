import React from 'react';
import type { FilmInfo } from '../../types';

type FilmOverviewProps = Pick<
  FilmInfo,
  'rating' | 'description' | 'director' | 'starring' | 'scoresCount'
>;

function FilmOverview({
  rating,
  scoresCount,
  description,
  director,
  starring,
}: FilmOverviewProps): JSX.Element {
  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <div dangerouslySetInnerHTML={{ __html: description }} />

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>
            Starring:
            {starring?.map((star) => `${star}, `)}
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
}

export default FilmOverview;
