import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app';

jest.mock(`../map/map`, () => `Map`);

const mockOffersData = [
  {
    'id': 0,
    'city': {
      name: `Paris`,
      location: [52.38333, 4.9]
    },
    'title': `Beautiful & luxurious apartment at great location`,
    'type': `Apartment`,
    'preview_image': `img/apartment-01.jpg`,
    'price': 150,
    'rating': 9,
    'isBookmarked': false,
    'is_premium': false,
    'location': [52.3909553943508, 4.85309666406198],
  },
  {
    'id': 1,
    'city': {
      name: `Paris`,
      location: [52.38333, 4.9]
    },
    'title': `Wood and stone place`,
    'type': `Private room`,
    'preview_image': `img/apartment-02.jpg`,
    'price': 200,
    'rating': 9.5,
    'isBookmarked': true,
    'is_premium': true,
    'location': [52.3695553943508, 4.85309666406198],
  },
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

it(`App correctly renders`, () => {
  const tree = renderer
    .create(<App
      currentCityIndex={mock.currentCityIndex}
      citiesData={mock.citiesData}
      currentOffersData={mock.currentOffersData}
      onCityClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
