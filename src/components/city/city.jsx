import React from 'react';
import PropTypes from "prop-types";

const City = (props) => {
  const {cityName, isActive, onCityClick} = props;

  const handlerCityClick = (evt) => {
    onCityClick(evt, cityName);
  };

  return <li className="locations__item">
    <a className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`} onClick={handlerCityClick}>
      <span>{cityName}</span>
    </a>
  </li>;
};

City.propTypes = {
  cityName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default City;
