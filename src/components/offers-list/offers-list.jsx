import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import OfferCard from '../offer-card/offer-card';
import {ActionCreator, Operation} from '../../reducer/data/data';

const OffersList = (props) => {
  const {offers, setActiveOffer, onReviewsDataLoaded, articleClassName} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const changeActiveOffer = () => {
          setActiveOffer(offer);
          onReviewsDataLoaded(offer.id);
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
            isBookmarked={offer.isBookmarked}
            onTitleClick={changeActiveOffer}
            articleClassName={articleClassName}
          />);
      })}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  setActiveOffer: PropTypes.func.isRequired,
  onReviewsDataLoaded: PropTypes.func.isRequired,
  articleClassName: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  onReviewsDataLoaded: (id) => {
    dispatch(Operation.loadReviewsData(id));
  },
  setActiveOffer: (activeOffer) => {
    dispatch(ActionCreator.changeActiveOffer(activeOffer));
  },
});

export {OffersList};
export default connect(null, mapDispatchToProps)(OffersList);
