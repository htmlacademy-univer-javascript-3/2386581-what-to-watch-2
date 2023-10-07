import React, { useState, ChangeEvent } from 'react';
import type { ReviewFields } from '../../types';
import { INITIAL_REVIEW_STATE } from '../../const';

const RATING_OPTIONS = Array.from({ length: 10 }, (_, i) => i + 1).reverse();

function AddReviewForm() {
  const [review, setReview] = useState<ReviewFields>(INITIAL_REVIEW_STATE);

  function handleFormChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { name, value } = event.target;
    setReview({
      ...review,
      [name]: value,
    });
  }

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
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={handleFormChange}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddReviewForm;
