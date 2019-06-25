import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Header} from './header';

const mockUserData = {
  id: 1,
  email: `test-mail@test.com`,
  name: `test-name`,
  avatarUrl: `/static/avatar/8.jpg`,
  isPro: false
};

it(`Header correctly renders without authorization`, () => {
  const isAuthorizationRequired = true;
  const tree = renderer
    .create(<BrowserRouter>
      <Header
        isAuthorizationRequired={isAuthorizationRequired}
        userData={mockUserData}
      />
    </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Header correctly renders with authorization`, () => {
  const isAuthorizationRequired = false;
  const tree = renderer
    .create(<BrowserRouter>
      <Header
        isAuthorizationRequired={isAuthorizationRequired}
        userData={mockUserData}
      />
    </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
