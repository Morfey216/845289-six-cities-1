import React from 'react';
import PropTypes from 'prop-types';
import Sorting from '../sorting/sorting';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import widthItemActiveSwitch from '../../hocs/width-item-active-switch/width-item-active-switch';

const OffersFilled = (props) => {
  const {currentCityName, currentOffersData} = props;
  const WidthItemActiveSwitchWrapper = widthItemActiveSwitch(Sorting);

  return (
    <React.Fragment>
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`${currentOffersData.length} places to stay in ${currentCityName}`}</b>
          <WidthItemActiveSwitchWrapper/>
          <OffersList offers={currentOffersData} articleClassName={`cities__place-card`}/>
        </section>
        <div className="cities__right-section">
          <Map currentOffersData={currentOffersData} mapClassName={`cities__map`}/>
        </div>
      </div>
    </React.Fragment>
  );
};

OffersFilled.propTypes = {
  currentCityName: PropTypes.string.isRequired,
  currentOffersData: PropTypes.array.isRequired,
};

export default OffersFilled;
