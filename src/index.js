import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mocks from './mocks/offers';

const init = (mocksData) => {
  ReactDOM.render(
      <App
        offers = {mocksData}
      />,
      document.querySelector(`#root`)
  );
};

init(mocks);
