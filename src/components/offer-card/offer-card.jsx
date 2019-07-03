import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {RATING_MULTIPLIER} from '../../constants';

const OfferCard = (props) => {
  const {
    id,
    title,
    type,
    image,
    price,
    rating,
    isPremium,
    isFavorite,
    onTitleClick,
    onImageClick,
    onButtonClick,
    articleClassName,
    imageWrapperClassName,
    placeCardInfoClassName,
  } = props;

  return (
    <React.Fragment>
      <article className={`${articleClassName} place-card`}>
        {isPremium ? (<div className="place-card__mark"><span>Premium</span></div>) : ``}
        <div className={`${imageWrapperClassName} place-card__image-wrapper`}>
          <a href="#">
            <img className="place-card__image" src={image} width="260" height="200" alt="Place image" onClick={onImageClick}/>
          </a>
        </div>
        <div className={`${placeCardInfoClassName} place-card__info`}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`}
              onClick={onButtonClick}
              type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${Math.round(rating) * RATING_MULTIPLIER}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${id}`} onClick={onTitleClick}>{title}</Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </React.Fragment>
  );
};

OfferCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool,
  isPremium: PropTypes.bool,
  articleClassName: PropTypes.string,
  imageWrapperClassName: PropTypes.string,
  placeCardInfoClassName: PropTypes.string,
  onTitleClick: PropTypes.func.isRequired,
  onImageClick: PropTypes.func,
  onButtonClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
};

export default OfferCard;
