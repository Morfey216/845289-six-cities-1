import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list';

const citiesData = [
  {
    name: `Paris`,
    location: {}
  },
  {
    name: `Cologne`,
    location: {}
  },
  {
    name: `Brussels`,
    location: {}
  },
  {
    name: `Amsterdam`,
    location: {}
  },
  {
    name: `Hamburg`,
    location: {}
  },
  {
    name: `Dusseldorf`,
    location: {}
  },
];

const currentCityIndex = 3;
const onCityClick = jest.fn();
const mock = {currentCityIndex, citiesData, onCityClick};

it(`Cities List correctly renders`, () => {
  const tree = renderer
    .create(<CitiesList
      {...mock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
