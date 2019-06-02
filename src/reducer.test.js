import {reducer, citiesDataKit, getCurrentOffersData, ActionCreator} from './reducer';
import offersDataKit from './mocks/offers';

it(`Reducer creates initialState correctly`, () => {
  expect(reducer(undefined, {})).toEqual({
    citiesData: citiesDataKit,
    currentCity: citiesDataKit[0].name,
    currentOffersData: getCurrentOffersData(citiesDataKit[0].name, offersDataKit),
  });
});

it(`Reducer correctly returns new state after changes currentCity`, () => {
  expect(reducer(undefined, {
    type: `CHANGE_CURRENT_CITY`,
    payload: citiesDataKit[citiesDataKit.length - 1].name,
  })).toEqual({
    citiesData: citiesDataKit,
    currentCity: citiesDataKit[citiesDataKit.length - 1].name,
    currentOffersData: getCurrentOffersData(citiesDataKit[citiesDataKit.length - 1].name, offersDataKit),
  });
});

it(`ActionCreator correctly returns CHANGE_CURRENT_CITY action`, () => {
  expect(ActionCreator[`CHANGE_CURRENT_CITY`](citiesDataKit[0].name)).toEqual({
    type: `CHANGE_CURRENT_CITY`,
    payload: citiesDataKit[0].name,
  });
});