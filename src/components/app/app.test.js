import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import App from './app';
import offersDataKit from '../../mocks/offers';
import {citiesDataKit, getCurrentOffersData} from '../../reducer';

Enzyme.configure({adapter: new Adapter()});

const initialState = {
  citiesData: citiesDataKit,
  currentCity: citiesDataKit[0].name,
  currentOffersData: getCurrentOffersData(citiesDataKit[0].name, offersDataKit),
};

const mockStore = configureStore();
const store = mockStore(initialState);

it(`App correctly renders`, () => {
  const mapSection = document.createElement(`section`);
  mapSection.setAttribute(`id`, `mapid`);
  document.body.appendChild(mapSection);

  const wrapper = shallow(<App store = {store} />);

  expect(wrapper).toMatchSnapshot();
});
