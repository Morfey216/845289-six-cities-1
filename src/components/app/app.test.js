import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app';
import {getCurrentOffersData} from '../../reducer';

const mockOffersData = [
  {
    id: 0,
    city: `Paris`,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    image: `img/apartment-01.jpg`,
    price: 150,
    rating: 90,
    isBookmarked: false,
    isPremium: false,
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: 1,
    city: `Paris`,
    title: `Wood and stone place`,
    type: `Private room`,
    image: `img/apartment-02.jpg`,
    price: 200,
    rating: 95,
    isBookmarked: true,
    isPremium: true,
    coordinates: [52.3695553943508, 4.85309666406198],
  },
  {
    id: 2,
    city: `Cologne`,
    title: `Wood and stone place`,
    type: `Private room`,
    image: `img/apartment-03.jpg`,
    price: 250,
    rating: 95,
    isBookmarked: true,
    isPremium: false,
    coordinates: [52.3909553943508, 4.929309666406198],
  },
];

const citiesDataKit = [
  {
    name: `Paris`,
    coordinates: [52.38333, 4.9]
  },
  {
    name: `Cologne`,
    coordinates: [52.38333, 4.9]
  },
];

const mock = {
  citiesData: citiesDataKit,
  currentCity: citiesDataKit[0].name,
  currentOffersData: getCurrentOffersData(citiesDataKit[0].name, mockOffersData),
};

it(`App correctly renders`, () => {
  const mapSection = document.createElement(`section`);
  mapSection.setAttribute(`id`, `mapid`);
  document.body.appendChild(mapSection);

  const tree = renderer
    .create(<App
      currentCity={mock.currentCity}
      citiesData={mock.citiesData}
      currentOffersData={mock.currentOffersData}
      onCityClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
