import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Operation} from '../../reducer/data/data';

const ReviewForm = (props) => {
  const {activeOfferId, onFormSubmit} = props;

  return (
    <React.Fragment>
      <form className="reviews__form form" action="#" method="post" onSubmit={(evt) => {
        evt.preventDefault();
        onFormSubmit(evt, activeOfferId);
      }}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" required={true}/>
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea"
          id="review" name="review" minLength="50" maxLength="300"
          placeholder="Tell how was your stay, what you like and what can be improved" required={true}>
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
};

ReviewForm.propTypes = {
  activeOfferId: PropTypes.number.isRequired,
  onFormSubmit: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: (evt, activeOfferId) => {
    evt.preventDefault();

    const review = {
      rating: 0,
      comment: ``,
    };

    const processForm = (formData) => {
      const createMapper = (target) => {
        return {
          'rating': (value) => (target.rating = value),
          'review': (value) => (target.comment = value),
        };
      };

      const reviewMapper = createMapper(review);

      for (const pair of formData.entries()) {
        const [property, value] = pair;

        if (reviewMapper[property]) {
          reviewMapper[property](value);
        }
      }
    };

    const formData = new FormData(document.querySelector(`form`));
    processForm(formData);

    dispatch(Operation.sendReviewData(activeOfferId, review));
    document.querySelector(`form`).reset();
  },
});

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
