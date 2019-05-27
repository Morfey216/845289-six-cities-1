import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';

const mock = [{
  title: `Offer Title`,
  type: `Offer Type`,
  image: `Image Path`,
  price: 0,
  rating: 100,
  coordinates: [52.3909553943508, 4.85309666406198],
}];

it(`Map correctly renders`, () => {
  const mapSection = document.createElement(`section`);
  mapSection.setAttribute(`id`, `mapid`);
  document.body.appendChild(mapSection);

  const tree = renderer
      .create(<Map offers={mock}/>)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
