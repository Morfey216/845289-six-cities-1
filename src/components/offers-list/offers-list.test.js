import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from './offers-list';

const mock = [
  {
    id: 0,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    image: `img/apartment-01.jpg`,
    price: 100,
    rating: 100,
    isPremium: false,
    isBookmarked: false
  },
  {
    id: 1,
    title: `Wood and stone place`,
    type: `Private room`,
    image: `img/room.jpg`,
    price: 80,
    rating: 80,
    isPremium: true,
    isBookmarked: true
  },
  {
    id: 2,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    image: `img/apartment-02.jpg`,
    price: 60,
    rating: 60,
    isPremium: true,
    isBookmarked: false
  },
  {
    id: 3,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    image: `img/apartment-03.jpg`,
    price: 40,
    rating: 40,
    isPremium: false,
    isBookmarked: true
  },
];

it(`Offers List correctly renders`, () => {
  const setActiveItem = jest.fn();
  const tree = renderer
    .create(<OffersList
      offers={mock}
      setActiveItem={setActiveItem}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
