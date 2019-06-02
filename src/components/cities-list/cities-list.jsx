import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import City from '../city/city';

const CitiesList = (props) => {
  const {currentCity, citiesData, onCityClick} = props;

  const verifyActiveCity = (city) => {
    return city === currentCity;
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesData.map((cityData, index) => <City
          key={`city-${index}`}
          cityName={cityData.name}
          isActive={verifyActiveCity(cityData.name)}
          onCityClick={onCityClick}
        />)}
      </ul>
    </section>
  );
};

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  citiesData: PropTypes.array.isRequired,
  onCityClick: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.currentCity,
  citiesData: state.citiesData,
});

const mapDispatchToProps = (dispatch) => ({

  onCityClick: (evt, activeCity) => {
    dispatch(ActionCreator[`CHANGE_CURRENT_CITY`](activeCity));
  },

});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
