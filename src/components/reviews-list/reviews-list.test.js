import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewsList} from './reviews-list';

jest.mock(`../review-form/review-form`, () => `ReviewForm`);

const mockReviewsData = [
  {
    id: 1,
    user: {
      id: 16,
      name: `Mollie`,
      avatarUrl: `/5.jpg`,
      isPro: true
    },
    rating: 4,
    review: `Review text 1`,
    date: `2019-06-23T05:59:03.102Z`
  },
  {
    id: 2,
    user: {
      id: 17,
      name: `Angelina`,
      avatarUrl: `/7.jpg`,
      isPro: true
    },
    rating: 3,
    review: `Review text 2`,
    date: `2019-05-23T05:59:03.102Z`
  }
];

const mockActiveOfferId = 1;

it(`Reviews List correctly renders with true isAuthorizationRequired`, () => {
  const tree = renderer
      .create(<ReviewsList
        activeOfferId={mockActiveOfferId}
        isAuthorizationRequired={true}
        reviewsData={mockReviewsData}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Reviews List correctly renders with false isAuthorizationRequired`, () => {
  const tree = renderer
        .create(<ReviewsList
          activeOfferId={mockActiveOfferId}
          isAuthorizationRequired={false}
          reviewsData={mockReviewsData}
        />)
        .toJSON();

  expect(tree).toMatchSnapshot();
});
