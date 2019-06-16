import React from 'react';
import PropTypes from "prop-types";
import City from '../city/city';

const CitiesList = (props) => {
  const {currentCityIndex, citiesData, onCityClick} = props;

  const verifyActiveCity = (cityIndex) => cityIndex === currentCityIndex;

  const handlerChangeCity = (cityName) => {
    const activeCityIndex = citiesData.findIndex((cityData) => cityData.name === cityName);
    onCityClick(activeCityIndex);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesData.map((cityData, index) => <City
          key={`city-${index}`}
          cityName={cityData.name}
          isActive={verifyActiveCity(index)}
          onCityClick={handlerChangeCity}
        />)}
      </ul>
    </section>
  );
};

CitiesList.propTypes = {
  currentCityIndex: PropTypes.number.isRequired,
  citiesData: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default CitiesList;
