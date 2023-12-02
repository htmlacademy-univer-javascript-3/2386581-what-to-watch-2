import Button from '../button/button';

import React, { useState, ChangeEvent, useCallback } from 'react';
import type { ReviewFields } from '../../types';
import { INITIAL_REVIEW_STATE, AppRoute } from '../../const';
import { addReview } from '../../store/api-actions';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/store';

const RATING_OPTIONS = Array.from({ length: 10 }, (_, i) => i + 1).reverse();
const MAX_LEN_REVIEW = 400;
const MIN_LEN_REVIEW = 50;

type AddReviewFormProps = {
  filmId: string;
};

function AddReviewForm({ filmId }: AddReviewFormProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [review, setReview] = useState<ReviewFields>(INITIAL_REVIEW_STATE);

  const handleFormChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      dispatch(
        addReview({
          comment: review.comment,
          rating: Number(review.rating),
          filmId: filmId,
        })
      ).then(() => {
        navigate(AppRoute.Movie.replace(':id', filmId));
      });
    },
    [dispatch, filmId, navigate, review]
  );

  const isDisabled =
    review.rating === 0 ||
    !review.comment ||
    review.comment.length < MIN_LEN_REVIEW ||
    review.comment.length > MAX_LEN_REVIEW;

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {RATING_OPTIONS.map((star) => (
            <React.Fragment key={star}>
              <input
                className="rating__input"
                id={`star-${star}`}
                type="radio"
                name="rating"
                value={star}
                onChange={handleFormChange}
              />
              <label className="rating__label" htmlFor={`star-${star}`}>
                Rating {star}
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="comment"
          id="comment"
          placeholder="Review text"
          onChange={handleFormChange}
        />
        <div className="add-review__submit">
          <Button
            className="add-review__btn"
            type="submit"
            disabled={isDisabled}
            onClick={handleSubmit}
          >
            Post
          </Button>
        </div>
      </div>
    </form>
  );
}

export default AddReviewForm;
