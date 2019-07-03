import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import OfferCard from '../offer-card/offer-card';
import {ActionCreator, Operation} from '../../reducer/data/data';

const OffersList = (props) => {
  const {
    offers,
    setActiveOffer,
    changeFavoriteStatus,
    onReviewsDataLoaded,
    articleClassName,
    divClassName,
    imageWrapperClassName,
    placeCardInfoClassName,
  } = props;

  return (
    <div className={divClassName}>
      {offers.map((offer) => {
        const changeActiveOffer = () => {
          setActiveOffer(offer);
          onReviewsDataLoaded(offer.id);
        };

        const chooseActiveOffer = () => {
          setActiveOffer(offer);
        };

        const changeFavoriteOffer = () => {
          changeFavoriteStatus(offer.id, offer.isFavorite ? 0 : 1);
        };

        return (
          <OfferCard
            key={offer.id}
            id={offer.id}
            title={offer.title}
            type={offer.type}
            image={offer.previewImage}
            price={offer.price}
            rating={offer.rating}
            isPremium={offer.isPremium}
            isFavorite={offer.isFavorite}
            isBookmarked={offer.isBookmarked}
            onTitleClick={changeActiveOffer}
            onImageClick={chooseActiveOffer}
            onButtonClick={changeFavoriteOffer}
            articleClassName={articleClassName}
            imageWrapperClassName={imageWrapperClassName}
            placeCardInfoClassName={placeCardInfoClassName}
          />);
      })}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  setActiveOffer: PropTypes.func.isRequired,
  changeFavoriteStatus: PropTypes.func,
  onReviewsDataLoaded: PropTypes.func.isRequired,
  articleClassName: PropTypes.string,
  divClassName: PropTypes.string,
  imageWrapperClassName: PropTypes.string,
  placeCardInfoClassName: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  onReviewsDataLoaded: (id) => {
    dispatch(Operation.loadReviewsData(id));
  },
  setActiveOffer: (activeOffer) => {
    dispatch(ActionCreator.changeActiveOffer(activeOffer));
  },
  changeFavoriteStatus: (id, status) => {
    dispatch(Operation.changeFavoriteStatus(id, status));
  },
});

export {OffersList};
export default connect(null, mapDispatchToProps)(OffersList);
