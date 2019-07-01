import React from 'react';
import renderer from 'react-test-renderer';
import {OfferDetailed} from './offer-detailed';

jest.mock(`../header/header`, () => `Header`);
jest.mock(`../offers-list/offers-list`, () => `OffersList`);
jest.mock(`../reviews-list/reviews-list`, () => `ReviewsList`);
jest.mock(`../map/map`, () => `Map`);

const mockActiveOffer = {
  id: 6,
  city: {
    name: `Cologne`,
    location: {
      latitude: 50,
      longitude: 7,
      zoom: 13
    }
  },
  previewImage: `/13.jpg`,
  images: [
    `/20.jpg`,
    `/4.jpg`,
    `/8.jpg`,
    `/1.jpg`,
    `/2.jpg`,
    `/14.jpg`,
    `/11.jpg`
  ],
  title: `Offer title`,
  isFavorite: false,
  isPremium: false,
  rating: 4.8,
  type: `hotel`,
  bedrooms: 5,
  maxAdults: 8,
  price: 462,
  goods: [
    `Breakfast`,
    `Laptop`
  ],
  host: {
    id: 25,
    isPro: true,
    name: `Angelina`,
    avatarUrl: `img/avatar-angelina.jpg`
  },
  description: `A new description.`,
  location: {
    latitude: 50,
    longitude: 6.95,
    zoom: 16
  }
};

const mockNearOffersData = [];

it(`OfferDetailed correctly renders`, () => {
  const tree = renderer
      .create(<OfferDetailed
        activeOffer={mockActiveOffer}
        nearOffersData={mockNearOffersData}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
