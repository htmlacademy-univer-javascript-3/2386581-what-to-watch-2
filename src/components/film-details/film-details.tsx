import type { FilmInfo } from '../../types';
import { formatToHoursAndMinutes } from '../../utils/format-to-hours-and-minutes';
import React from 'react';

type FilmDetailsProps = Pick<
  FilmInfo,
  'director' | 'starring' | 'runTime' | 'genre' | 'released'
>;

function FilmDetailsComponent({
  director,
  starring,
  runTime,
  genre,
  released,
}: FilmDetailsProps): JSX.Element {
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            <span>{starring?.map((star) => `${star}, `)}</span>
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">
            {formatToHoursAndMinutes(runTime)}
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

const FilmDetails = React.memo(FilmDetailsComponent);

export default FilmDetails;
