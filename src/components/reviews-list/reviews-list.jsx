import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getReviewsData} from '../../reducer/data/selectors';
import {getAuthorizationRequired} from '../../reducer/user/selectors';
import ReviewItem from '../review-item/review-item';
import ReviewForm from '../review-form/review-form';
import {MAX_REVIEWS_QUANTITY} from '../../constants';

const ReviewsList = (props) => {
  const {isAuthorizationRequired, reviewsData} = props;
  const preparedReviewsData = reviewsData.slice(0, MAX_REVIEWS_QUANTITY);

  return (
    <React.Fragment>
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsData.length}</span></h2>
        <ul className="reviews__list">
          {preparedReviewsData.map((review) => {
            return <ReviewItem reviewData={review} key={`review-${review.id}`}/>;
          })}
        </ul>
        {isAuthorizationRequired ? `` : <ReviewForm/>}
      </section>
    </React.Fragment>
  );
};

ReviewsList.propTypes = {
  reviewsData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired
    }),
    rating: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired,
    date: PropTypes.string,
  })),
  isAuthorizationRequired: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: getAuthorizationRequired(state),
  reviewsData: getReviewsData(state),
});

export {ReviewsList};
export default connect(mapStateToProps)(ReviewsList);
