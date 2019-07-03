import React from 'react';
import renderer from 'react-test-renderer';

import {Main} from './main';

jest.mock(`../header/header`, () => `Header`);
jest.mock(`../sorting/sorting`, () => `Sorting`);
jest.mock(`../offers-list/offers-list`, () => `OffersList`);
jest.mock(`../map/map`, () => `Map`);

const mockOffersData = [
  {},
  {}
];

const citiesDataKit = [
  {
    name: `Paris`,
    location: [52.38333, 4.9]
  },
  {
    name: `Cologne`,
    location: [52.38333, 4.9]
  },
];

const mock = {
  citiesData: citiesDataKit,
  currentCityIndex: 0,
  currentOffersData: mockOffersData,
};

it(`Main correctly renders`, () => {
  const tree = renderer
    .create(<Main
      currentCityIndex={mock.currentCityIndex}
      citiesData={mock.citiesData}
      currentOffersData={mock.currentOffersData}
      onCityClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
