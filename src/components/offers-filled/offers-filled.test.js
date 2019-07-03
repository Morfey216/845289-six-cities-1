import React from 'react';
import renderer from 'react-test-renderer';

import OffersFilled from './offers-filled';

jest.mock(`../sorting/sorting`, () => `Sorting`);
jest.mock(`../offers-list/offers-list`, () => `OffersList`);
jest.mock(`../map/map`, () => `Map`);

const mockOffersData = [
  {},
  {}
];

const mockCityName = `Paris`;

it(`OffersFilled correctly renders`, () => {
  const tree = renderer
    .create(<OffersFilled
      currentCityName={mockCityName}
      currentOffersData={mockOffersData}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
