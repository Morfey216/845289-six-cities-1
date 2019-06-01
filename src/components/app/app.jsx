import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Main from '../main/main';

const App = (props) => {
  const {currentCity, currentOffersData, citiesData} = props;
  return <Main
    // offers = {offers}
    offers = {currentOffersData}
  />;
};

App.propTypes = {
  currentCity: PropTypes.string.isRequired,
  currentOffersData: PropTypes.array.isRequired,
  citiesData: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.currentCity,
  currentOffersData: state.currentOffersData,
  citiesData: state.citiesData,
});

export {App};
export default connect(mapStateToProps)(App);
