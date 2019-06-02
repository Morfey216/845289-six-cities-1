import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main';

it(`Main correctly renders`, () => {
  const mapSection = document.createElement(`section`);
  mapSection.setAttribute(`id`, `mapid`);
  document.body.appendChild(mapSection);

  const tree = renderer
    .create(<Main currentOffersData={[]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
