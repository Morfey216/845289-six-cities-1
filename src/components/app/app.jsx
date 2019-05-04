import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  const {titles} = props;
  return <Main
    apartments = {titles}
  />;
};

export default App;
