import React from 'react';
import renderer from 'react-test-renderer';
import {OffersList} from './offers-list';
import {MemoryRouter} from 'react-router-dom';

const mock = [
  {
    id: 0,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    previewImage: `img/apartment-01.jpg`,
    price: 100,
    rating: 10,
    isPremium: false,
    isFavorite: false
  },
  {
    id: 1,
    title: `Wood and stone place`,
    type: `Private room`,
    previewImage: `img/room.jpg`,
    price: 80,
    rating: 8,
    isPremium: true,
    isFavorite: true
  },
  {
    id: 2,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    previewImage: `img/apartment-02.jpg`,
    price: 60,
    rating: 6,
    isPremium: true,
    isFavorite: false
  },
  {
    id: 3,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    previewImage: `img/apartment-03.jpg`,
    price: 40,
    rating: 4,
    isPremium: false,
    isFavorite: true
  },
];

it(`Offers List correctly renders`, () => {
  const setActiveItem = jest.fn();
  const setActiveOffer = jest.fn();
  const onReviewsDataLoaded = jest.fn();
  const tree = renderer
    .create(
        <MemoryRouter>
          <OffersList
            offers={mock}
            setActiveItem={setActiveItem}
            setActiveOffer={setActiveOffer}
            onReviewsDataLoaded={onReviewsDataLoaded}
            divClassName={`cities__places-list places__list tabs__content`}
            articleClassName={`cities__place-card`}
            imageWrapperClassName={`cities__image-wrapper`}
            placeCardInfoClassName={``}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
