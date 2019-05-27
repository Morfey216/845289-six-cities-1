import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mocks from './mocks/offers';

const init = (offersData) => {
  ReactDOM.render(
      <App
        offers = {offersData}
      />,
      document.querySelector(`#root`)
  );
};

init(mocks);
