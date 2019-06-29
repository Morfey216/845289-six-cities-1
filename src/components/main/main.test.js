import React from 'react';
import renderer from 'react-test-renderer';

import {Main} from './main';

jest.mock(`../header/header`, () => `Header`);
jest.mock(`../offers-list/offers-list`, () => `OffersList`);
jest.mock(`../map/map`, () => `Map`);

const mockOffersData = [
  {
    id: 0,
    city: {
      name: `Paris`,
      location: [52.38333, 4.9]
    },
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    previewImage: `img/apartment-01.jpg`,
    price: 150,
    rating: 9,
    isBookmarked: false,
    isPremium: false,
    location: [52.3909553943508, 4.85309666406198],
  },
  {
    id: 1,
    city: {
      name: `Paris`,
      location: [52.38333, 4.9]
    },
    title: `Wood and stone place`,
    type: `Private room`,
    previewImage: `img/apartment-02.jpg`,
    price: 200,
    rating: 9.5,
    isBookmarked: true,
    isPremium: true,
    location: [52.3695553943508, 4.85309666406198],
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
