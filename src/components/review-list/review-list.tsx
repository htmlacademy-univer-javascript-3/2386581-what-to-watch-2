import Loader from '../loader/loader';

import React, { useLayoutEffect } from 'react';
import type { Review } from '../../types';
import { formatDate } from '../../utils/format-date';
import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { getReviews } from '../../store/api-actions';
import { getReviews as getReviewsState} from '../../store/main-film-data/selectors';

type ReviewListProps = {
  filmId: string;
};

function ReviewItem(props: Review): JSX.Element {
  const { date, user, comment, rating } = props;

  const formatedDate = formatDate(new Date(date));

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user}</cite>
          <time className="review__date" dateTime="2016-12-24">
            {formatedDate}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

function ReviewListComponent({ filmId }: ReviewListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(getReviewsState);

  useLayoutEffect(() => {
    dispatch(getReviews(filmId));
  }, [dispatch, filmId]);

  if (!filmId) {
    return <Loader />;
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(reviews.length / 2, reviews.length).map((review) => (
          <ReviewItem key={review.id} {...review} />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(0, reviews.length / 2).map((review) => (
          <ReviewItem key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
}

const ReviewList = React.memo(ReviewListComponent);

export default ReviewList;
