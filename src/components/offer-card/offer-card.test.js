import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card';
import {MemoryRouter} from 'react-router-dom';

const mock = {
  'id': 5,
  'title': `Beautiful & luxurious apartment at great location`,
  'type': `Apartment`,
  'preview_image': `img/apartment-01.jpg`,
  'price': 0,
  'rating': 10,
  'is_premium': true,
  'is_favorite': true,
  'isBookmarked': true,
};

it(`Offer Card correctly renders with false markers`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <OfferCard
            id={mock.id}
            title={mock.title}
            type={mock.type}
            image={mock[`preview_image`]}
            price={mock.price}
            rating={mock.rating}
            isPremium={!mock[`is_premium`]}
            isFavorite={!mock[`is_favorite`]}
            onTitleClick={jest.fn()}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Offer Card correctly renders with true markers`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <OfferCard
            id={mock.id}
            title={mock.title}
            type={mock.type}
            image={mock[`preview_image`]}
            price={mock.price}
            rating={mock.rating}
            isPremium={mock[`is_premium`]}
            isFavorite={mock[`is_favorite`]}
            onTitleClick={jest.fn()}
          />
        </MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
