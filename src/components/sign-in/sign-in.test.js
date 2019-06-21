import React from 'react';
import renderer from 'react-test-renderer';

import {SignIn} from './sign-in';

// jest.mock(`../map/map`, () => `Map`);

it(`SignIn correctly renders`, () => {
  const tree = renderer
    .create(<SignIn
      onFormSubmit={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
