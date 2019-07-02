import {StatusCode} from '../../constants';
import {offerDataModel, reviewDataModel} from "../../data-models";

const ActionType = {
  LOAD_OFFERS_DATA: `LOAD_OFFERS_DATA`,
  LOAD_REVIEWS_DATA: `LOAD_REVIEWS_DATA`,
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
};

const initialState = {
  offersDataKit: [],
  currentCityIndex: 0,
  activeOffer: null,
  reviewsData: [],
};

const ActionCreator = {
  loadOffersData: (offersDataKit) => ({
    type: ActionType.LOAD_OFFERS_DATA,
    payload: offersDataKit,
  }),
  loadReviewsData: (reviews) => ({
    type: ActionType.LOAD_REVIEWS_DATA,
    payload: reviews,
  }),
  changeCurrentCity: (currentCityIndex) => ({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: currentCityIndex,
  }),
  changeActiveOffer: (offer) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: offer,
  }),
};

const Operation = {
  loadOffersData: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const offersData = response.data.map((itData) => offerDataModel(itData));
        dispatch(ActionCreator.loadOffersData(offersData));
      });
  },
  loadReviewsData: (id) => (dispatch, _getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        if (response.status === StatusCode.OK) {
          const reviewsData = response.data.map((itData) => reviewDataModel(itData));
          dispatch(ActionCreator.loadReviewsData(reviewsData));
        }
      });
  },
  sendReviewData: (id, review) => (dispatch, _getState, api) => {
    return api.post(`/comments/${id}`, review)
      .then((response) => {
        if (response.status === StatusCode.OK) {
          const reviewsData = response.data.map((itData) => reviewDataModel(itData));
          dispatch(ActionCreator.loadReviewsData(reviewsData));
        }
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS_DATA:
      return Object.assign({}, state, {
        offersDataKit: action.payload,
      });
    case ActionType.LOAD_REVIEWS_DATA:
      return Object.assign({}, state, {
        reviewsData: action.payload,
      });
    case ActionType.CHANGE_CURRENT_CITY:
      return Object.assign({}, state, {
        currentCityIndex: action.payload,
      });
    case ActionType.CHANGE_ACTIVE_OFFER:
      return Object.assign({}, state, {
        activeOffer: action.payload,
      });
  }
  return state;
};

export {
  ActionCreator,
  Operation,
  ActionType,
  reducer,
};
