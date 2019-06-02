import React from 'react';
import renderer from 'react-test-renderer';
import City from './city';

const mock = {
  name: `Amsterdam`,
  isActive: true,
  onCityClick: jest.fn()
};

it(`City correctly renders with true active city`, () => {
  const tree = renderer
    .create(<City
      cityName={mock.name}
      isActive={mock.isActive}
      onCityClick={mock.onCityClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`City correctly renders with false active city`, () => {
  const tree = renderer
      .create(<City
        cityName={mock.name}
        isActive={!mock.isActive}
        onCityClick={mock.onCityClick}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
