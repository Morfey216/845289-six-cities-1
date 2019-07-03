import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCitiesData, getCurrentCityIndex, getCurrentOffersData} from '../../reducer/data/selectors';
import {ActionCreator} from '../../reducer/data/data';
import Header from '../header/header';
import OffersEmpty from '../offers-empty/offers-empty';
import OffersFilled from '../offers-filled/offers-filled';
import CitiesList from '../cities-list/cities-list';

const Main = (props) => {
  const {currentCityIndex, citiesData, currentOffersData, onCityClick} = props;
  const currentCityName = citiesData[currentCityIndex] !== undefined ? citiesData[currentCityIndex].name : ``;

  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities tabs">
          <CitiesList
            currentCityIndex={currentCityIndex}
            citiesData={citiesData}
            onCityClick={onCityClick}
          />
        </div>
        <div className="cities__places-wrapper">
          {currentOffersData.length
            ? <OffersFilled currentCityName={currentCityName} currentOffersData={currentOffersData}/>
            : <OffersEmpty currentCityName={currentCityName} currentOffersData={currentOffersData}/>}
        </div>
      </main>
    </React.Fragment>
  );
};

Main.propTypes = {
  currentCityIndex: PropTypes.number.isRequired,
  citiesData: PropTypes.array.isRequired,
  currentOffersData: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCityIndex: getCurrentCityIndex(state),
  citiesData: getCitiesData(state),
  currentOffersData: getCurrentOffersData(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (activeCityIndex) => {
    dispatch(ActionCreator.changeCurrentCity(activeCityIndex));
    dispatch(ActionCreator.changeActiveOffer(null));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
