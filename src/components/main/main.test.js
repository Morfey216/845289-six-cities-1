import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

it(`Main correctly renders`, () => {
  const tree = renderer
    .create(<Main apartments={[]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
