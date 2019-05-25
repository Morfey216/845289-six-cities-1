import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card';

const mock = {
  title: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  image: `img/apartment-01.jpg`,
  price: 0,
  rating: 100
};

it(`Offer Card correctly renders`, () => {
  const tree = renderer
    .create(<OfferCard
      title={mock.title}
      type={mock.type}
      image={mock.image}
      price={mock.price}
      rating={mock.rating}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
