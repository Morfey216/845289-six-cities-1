import React from 'react';
import renderer from 'react-test-renderer';

import OffersEmpty from './offers-empty';

const mockCityName = `Paris`;

it(`OffersEmpty correctly renders`, () => {
  const tree = renderer
    .create(<OffersEmpty
      currentCityName={mockCityName}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
