import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const apartmentList = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

const init = (apartments) => {
  ReactDOM.render(
      <App
        titles = {apartments}
      />,
      document.querySelector(`#root`)
  );
};

init(apartmentList);
