import {ActionType, ActionCreator, reducer} from './user';

it(`Reducer creates initialState correctly`, () => {
  expect(reducer(undefined, {})).toEqual({
    userData: {},
    isAuthorizationRequired: false,
  });
});

it(`ActionCreator correctly returns REQUIRED_AUTHORIZATION action`, () => {
  const mockRequireAuthorization = true;
  expect(ActionCreator.requireAuthorization(mockRequireAuthorization)).toEqual({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: mockRequireAuthorization,
  });
});
