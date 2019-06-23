import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCitiesData, getCurrentCityIndex, getCurrentOffersData} from '../../reducer/data/selectors';
import {ActionCreator} from '../../reducer/data/data';
import Header from '../header/header';
import OffersList from '../offers-list/offers-list';
import CitiesList from '../cities-list/cities-list';
import Map from '../map/map';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';

const Main = (props) => {
  const {currentCityIndex, citiesData, currentOffersData, onCityClick} = props;
  const OffersListWrapped = withActiveItem(OffersList);

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
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${currentOffersData.length} places to stay in ${citiesData[currentCityIndex] !== undefined ? citiesData[currentCityIndex].name : ``}`}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <OffersListWrapped offers={currentOffersData}/>
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
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
  },

});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
