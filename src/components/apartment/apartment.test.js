import React from 'react';
import renderer from 'react-test-renderer';
import Apartment from './apartment';

it(`Apartment correctly renders`, () => {
  const tree = renderer
    .create(<Apartment apartmentTitle={``}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
