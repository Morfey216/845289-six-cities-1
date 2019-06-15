import MockAdapter from 'axios-mack-adapter';
import configureAPI from './api';
import {ActionType, Operation} from './reducer';

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
