import {reducer, citiesDataKit, getCurrentOffersData} from './reducer';
import offersDataKit from './mocks/offers';

it(`Reducer creates initialState correctly`, () => {
  expect(reducer(undefined, {})).toEqual({
    citiesData: citiesDataKit,
    currentCity: citiesDataKit[0].name,
    currentOffersData: getCurrentOffersData(citiesDataKit[0].name, offersDataKit),
  });
});
