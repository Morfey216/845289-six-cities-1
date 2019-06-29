import MockAdapter from 'axios-mock-adapter';
import configureAPI from '../../api';
import {Operation, ActionType, ActionCreator, reducer} from './data';
import {StatusCode} from '../../constants';
import {offersDataModel} from "../../data-models";

it(`Shoul make a correct API call to /hotels`, () => {
  const dispatch = jest.fn();
  const api = configureAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const offersLoader = Operation.loadOffersData();
  const mockData = [{
    'id': 1,
    'city': {
      'name': `Amsterdam`,
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      }
    },
    'preview_image': `img/1.png`,
    'images': [`img/1.png`, `img/2.png`],
    'title': `Beautiful & luxurious studio at great location`,
    'is_favorite': false,
    'is_premium': false,
    'rating': 4.8,
    'type': `apartment`,
    'bedrooms': 3,
    'max_adults': 4,
    'price': 120,
    'goods': [`Heating`, `Kitchen`],
    'host': {
      'id': 3,
      'is_pro': true,
      'name': `Angelina`,
      'avatar_url': `img/1.png`
    },
    'description': `A river by the unique lightness of Amsterdam.`,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    }
  }];

  apiMock
    .onGet(`/hotels`)
    .reply(StatusCode.OK, mockData);

  return offersLoader(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_OFFERS_DATA,
        payload: [offersDataModel(mockData[0])],
      });
    });
});

it(`Reducer creates initialState correctly`, () => {
  expect(reducer(undefined, {})).toEqual({
    offersDataKit: [],
    currentCityIndex: 0,
    activeOffer: null,
  });
});

it(`ActionCreator correctly returns CHANGE_CURRENT_CITY action`, () => {
  const mockCurrentCityIndex = 1;
  expect(ActionCreator.changeCurrentCity(mockCurrentCityIndex)).toEqual({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: mockCurrentCityIndex,
  });
});
