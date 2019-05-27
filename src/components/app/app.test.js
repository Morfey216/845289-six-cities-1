import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

it(`App correctly renders`, () => {
  const mapSection = document.createElement(`section`);
  mapSection.setAttribute(`id`, `mapid`);
  document.body.appendChild(mapSection);

  const tree = renderer
    .create(<App offers={[]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
