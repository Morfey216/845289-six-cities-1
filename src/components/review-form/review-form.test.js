import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewForm} from './review-form';

const mockActiveOfferId = 1;

it(`ReviewForm correctly renders`, () => {
  const tree = renderer
    .create(<ReviewForm activeOfferId={mockActiveOfferId}
      onFormSubmit={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
