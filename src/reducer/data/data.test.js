import MockAdapter from 'axios-mock-adapter';
import configureAPI from '../../api';
import {Operation, ActionType, ActionCreator, reducer} from './data';
import {StatusCode} from '../../constants';
import {offerDataModel, reviewDataModel} from "../../data-models";
import {SORTING_TYPES} from '../../constants';

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
        payload: [offerDataModel(mockData[0])],
      });
    });
});

it(`Shoul make a correct API call to /comments/:id`, () => {
  const dispatch = jest.fn();
  const api = configureAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const mockId = 1;
  const reviewsLoader = Operation.loadReviewsData(mockId);
  const mockData = [{
    "id": 1,
    "user": {
      "id": 15,
      "is_pro": true,
      "name": `Mollie`,
      "avatar_url": `img/avatar-max.jpg`
    },
    "rating": 4,
    "comment": `Home is amazing. It's like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius`,
    "date": `2019-06-23T05:59:03.102Z`
  }];

  apiMock
    .onGet(`/comments/${mockId}`)
    .reply(StatusCode.OK, mockData);

  return reviewsLoader(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_REVIEWS_DATA,
        payload: [reviewDataModel(mockData[0])],
      });
    });
});

it(`Reducer creates initialState correctly`, () => {
  expect(reducer(undefined, {})).toEqual({
    offersDataKit: [],
    currentCityIndex: 0,
    activeOffer: null,
    activeSortingType: SORTING_TYPES[0],
    reviewsData: [],
    favoritesData: [],
    error: null,
  });
});

it(`ActionCreator correctly returns LOAD_OFFERS_DATA action`, () => {
  const mockOffersData = [];
  expect(ActionCreator.setOffersData(mockOffersData)).toEqual({
    type: ActionType.LOAD_OFFERS_DATA,
    payload: mockOffersData,
  });
});

it(`ActionCreator correctly returns LOAD_REVIEWS_DATA action`, () => {
  const mockReviewsData = [];
  expect(ActionCreator.loadReviewsData(mockReviewsData)).toEqual({
    type: ActionType.LOAD_REVIEWS_DATA,
    payload: mockReviewsData,
  });
});

it(`ActionCreator correctly returns CHANGE_CURRENT_CITY action`, () => {
  const mockCurrentCityIndex = 1;
  expect(ActionCreator.changeCurrentCity(mockCurrentCityIndex)).toEqual({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: mockCurrentCityIndex,
  });
});

it(`ActionCreator correctly returns CHANGE_ACTIVE_OFFER action`, () => {
  const mockOffer = {};
  expect(ActionCreator.changeActiveOffer(mockOffer)).toEqual({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: mockOffer,
  });
});

it(`ActionCreator correctly returns CHANGE_ACTIVE_SORTING_TYPE action`, () => {
  const mockIsItemActive = true;
  expect(ActionCreator.changeActiveSortingType(mockIsItemActive)).toEqual({
    type: ActionType.CHANGE_ACTIVE_SORTING_TYPE,
    payload: mockIsItemActive,
  });
});
