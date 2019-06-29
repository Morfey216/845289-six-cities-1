import React from 'react';
import PropTypes from 'prop-types';
import {RATING_MULTIPLIER} from '../../constants';

const ReviewItem = (props) => {
  const {user, rating, review, date} = props.reviewData;

  return (
    <React.Fragment>
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
          </div>
          <span className="reviews__user-name">
            {user.name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: `${rating * RATING_MULTIPLIER}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {review}
          </p>
          <time className="reviews__time" dateTime={date}>April 2019</time>
        </div>
      </li>
    </React.Fragment>
  );
};

ReviewItem.propTypes = {
  reviewData: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired
    }),
    rating: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired,
    date: PropTypes.string,
  })
};

export default ReviewItem;
