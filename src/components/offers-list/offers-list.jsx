import React from 'react';
import PropTypes from "prop-types";
import OfferCard from '../offer-card/offer-card';

const OffersList = (props) => {
  const {offers, setActiveItem} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard
        key={offer.id}
        title={offer.title}
        type={offer.type}
        image={offer[`preview_image`]}
        price={offer.price}
        rating={offer.rating}
        isPremium={offer[`is_premium`]}
        isBookmarked={offer[`isBookmarked`]}
        onMouseOver={setActiveItem(offer)}
        onMouseOut={setActiveItem(null)}
      />)}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  setActiveItem: PropTypes.func.isRequired,
};

export default OffersList;
