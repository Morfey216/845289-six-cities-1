import React from 'react';
import renderer from 'react-test-renderer';

import {Sorting} from './sorting';

const mockActiveSortingType = `Popular`;
const mockIsItemActive = false;


const mock = {
  activeSortingType: mockActiveSortingType,
  onSortingTypeClick: jest.fn()
};

it(`Sorting correctly renders width isItemActive false status`, () => {
  const tree = renderer
    .create(<Sorting
      activeSortingType={mock.activeSortingType}
      onSortingTypeClick={mock.onSortingTypeClick}
      isItemActive={mockIsItemActive}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Sorting correctly renders width isItemActive true status`, () => {
  const tree = renderer
    .create(<Sorting
      activeSortingType={mock.activeSortingType}
      onSortingTypeClick={mock.onSortingTypeClick}
      isItemActive={!mockIsItemActive}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
