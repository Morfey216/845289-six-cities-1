import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app';
import offersDataKit from '../../mocks/offers';
import {citiesDataKit, getCurrentOffersData} from '../../reducer';


const mock = {
  currentCity: citiesDataKit[0].name,
  currentOffersData: getCurrentOffersData(citiesDataKit[0].name, offersDataKit),
};


it(`App correctly renders`, () => {
  const mapSection = document.createElement(`section`);
  mapSection.setAttribute(`id`, `mapid`);
  document.body.appendChild(mapSection);

  const tree = renderer
    .create(<App
      currentCity={mock.currentCity}
      currentOffersData={mock.currentOffersData}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
