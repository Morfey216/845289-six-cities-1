import MockAdapter from 'axios-mock-adapter';
import configureAPI from '../../api';
import {Operation, ActionType, ActionCreator, reducer} from './data';
import {StatusCode} from '../../constants';

it(`Shoul make a correct API call to /hotels`, () => {
  const dispatch = jest.fn();
  const api = configureAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const offersLoader = Operation.loadOffersData();

  apiMock
    .onGet(`/hotels`)
    .reply(StatusCode.OK, [{fake: true}]);

  return offersLoader(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_OFFERS_DATA,
        payload: [{fake: true}],
      });
    });
});

it(`Reducer creates initialState correctly`, () => {
  expect(reducer(undefined, {})).toEqual({
    offersDataKit: [],
    currentCityIndex: 0,
  });
});

it(`ActionCreator correctly returns CHANGE_CURRENT_CITY action`, () => {
  const mockCurrentCityIndex = 1;
  expect(ActionCreator.changeCurrentCity(mockCurrentCityIndex)).toEqual({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: mockCurrentCityIndex,
  });
});
