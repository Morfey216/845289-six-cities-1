import React from 'react';
import renderer from 'react-test-renderer';
import ReviewItem from './review-item';

const mockReviewData = {
  id: 1,
  user: {
    id: 16,
    name: `Mollie`,
    avatarUrl: `https://es31-server.appspot.com/six-cities/static/avatar/7.jpg`,
    isPro: true
  },
  rating: 4,
  review: `Home is amazing. It's like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius`,
  date: `2019-06-23T05:59:03.102Z`
};

it(`ReviewItem correctly renders`, () => {
  const tree = renderer
      .create(<ReviewItem reviewData={mockReviewData}/>)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
