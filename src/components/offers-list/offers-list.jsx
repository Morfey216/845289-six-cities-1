import React from 'react';
import PropTypes from "prop-types";
import OfferCard from '../offer-card/offer-card';

const OffersList = (props) => {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard
        key={offer.title}
        title={offer.title}
        type={offer.type}
        image={offer.image}
        price={offer.price}
        rating={offer.rating}
      />)}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default OffersList;
