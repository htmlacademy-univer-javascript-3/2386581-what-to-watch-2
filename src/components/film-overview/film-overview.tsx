import React from 'react';
import type { FilmInfo } from '../../types';
import { formatRating } from '../../utils/format-rating';

type FilmOverviewProps = Pick<
  FilmInfo,
  'rating' | 'description' | 'director' | 'starring' | 'scoresCount'
>;

function FilmOverviewComponent({
  rating,
  scoresCount,
  description,
  director,
  starring,
}: FilmOverviewProps) {
  const formatedRating = formatRating(rating);

  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{formatedRating}</span>
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

const FilmOverview = React.memo(FilmOverviewComponent);

export default FilmOverview;
