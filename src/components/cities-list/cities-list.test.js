import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list';

const citiesData = [
  {
    name: `Paris`,
    coordinates: []
  },
  {
    name: `Cologne`,
    coordinates: []
  },
  {
    name: `Brussels`,
    coordinates: []
  },
  {
    name: `Amsterdam`,
    coordinates: []
  },
  {
    name: `Hamburg`,
    coordinates: []
  },
  {
    name: `Dusseldorf`,
    coordinates: []
  },
];

const currentCity = `Amsterdam`;
const onCityClick = jest.fn();
const mock = {currentCity, citiesData, onCityClick};

it(`Cities List correctly renders`, () => {
  const tree = renderer
    .create(<CitiesList
      {...mock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
