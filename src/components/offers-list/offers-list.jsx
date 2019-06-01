import React from 'react';
import PropTypes from "prop-types";
import OfferCard from '../offer-card/offer-card';

class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null
    };
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <OfferCard
          key={offer.id}
          title={offer.title}
          type={offer.type}
          image={offer.image}
          price={offer.price}
          rating={offer.rating}
          onMouseOver={() => {
            this.setState({activeOffer: offer});
          }}
          onMouseOut={() => {
            this.setState({activeOffer: null});
          }}
        />)}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default OffersList;
