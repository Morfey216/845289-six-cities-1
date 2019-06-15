import MockAdapter from 'axios-mack-adapter';
import configureAPI from './api';
import {reducer, citiesDataKit, getCurrentOffersData, ActionType, ActionCreator, Operation} from './reducer';
import offersDataKit from './mocks/offers';

it(`Shoul make a correct API call to /hotels`, () => {
  const dispatch = jest.fn();
  const api = configureAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const offersLoader = Operation.loadOffersData();

  apiMock
    .onGet(`/hotels`)
    .reply(200, [{fake: true}]);

  return offersLoader(dispatch, jest.fn(), api)
    .then(() => {
      expect().toHaveBeenCalledTimes(1);
      expect().toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_OFFERS_DATA,
        payload: [{fake: true}],
      });
    });
});

it(`Reducer creates initialState correctly`, () => {
  expect(reducer(undefined, {})).toEqual({
    citiesData: citiesDataKit,
    currentCity: citiesDataKit[0].name,
    currentOffersData: getCurrentOffersData(citiesDataKit[0].name, offersDataKit),
  });
});

it(`Reducer correctly returns new state after changes currentCity`, () => {
  expect(reducer(undefined, {
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: citiesDataKit[citiesDataKit.length - 1].name,
  })).toEqual({
    citiesData: citiesDataKit,
    currentCity: citiesDataKit[citiesDataKit.length - 1].name,
    currentOffersData: getCurrentOffersData(citiesDataKit[citiesDataKit.length - 1].name, offersDataKit),
  });
});

it(`ActionCreator correctly returns CHANGE_CURRENT_CITY action`, () => {
  expect(ActionCreator.changeCurrentCity(citiesDataKit[0].name)).toEqual({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: citiesDataKit[0].name,
  });
});
