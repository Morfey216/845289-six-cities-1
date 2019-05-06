import React from 'react';
import PropTypes from "prop-types";
import Main from '../main/main';

const App = (props) => {
  const {titles} = props;
  return <Main
    apartments = {titles}
  />;
};

App.propTypes = {
  titles: PropTypes.array.isRequired
};

export default App;
