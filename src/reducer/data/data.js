import {offerDataModel, reviewDataModel} from "../../data-models";
import {SORTING_TYPES, StatusCode} from '../../constants';

const ActionType = {
  LOAD_OFFERS_DATA: `LOAD_OFFERS_DATA`,
  LOAD_REVIEWS_DATA: `LOAD_REVIEWS_DATA`,
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  CHANGE_ACTIVE_SORTING_TYPE: `CHANGE_ACTIVE_SORTING_TYPE`,
  SET_FAVORITES_DATA: `SET_FAVORITES_DATA`,
};

const initialState = {
  offersDataKit: [],
  currentCityIndex: 0,
  activeOffer: null,
  activeSortingType: SORTING_TYPES[0],
  reviewsData: [],
  favoritesData: [],
  error: null,
};

const ActionCreator = {
  setOffersData: (offersDataKit) => ({
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
  changeActiveSortingType: (type) => ({
    type: ActionType.CHANGE_ACTIVE_SORTING_TYPE,
    payload: type,
  }),
  setFavoritesData: (favoritesData) => ({
    type: ActionType.SET_FAVORITES_DATA,
    payload: favoritesData,
  }),
};

const Operation = {
  loadOffersData: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const offersData = response.data.map((itData) => offerDataModel(itData));
        dispatch(ActionCreator.setOffersData(offersData));
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
  loadFavoritesData: () => (dispatch, _getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const favoritesData = response.data.map((itData) => offerDataModel(itData));
        dispatch(ActionCreator.setFavoritesData(favoritesData));
      });
  },

  changeFavoriteStatus: (id, status) => (dispatch, _getState, api) => {
    return api.post(`/favorite/${id}/${status}`)
      .then((response) => {
        const responseOfferData = offerDataModel(response.data);
        const newOffersData = _getState().DATA.offersDataKit
        .map((offer) => offer.id === responseOfferData.id
          ? Object.assign({}, responseOfferData)
          : offer
        );

        dispatch(ActionCreator.setOffersData(newOffersData));
        dispatch(Operation.loadFavoritesData());
      })
      .catch((err) => {
        dispatch(ActionCreator.changeError(err));
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
    case ActionType.CHANGE_ACTIVE_SORTING_TYPE:
      return Object.assign({}, state, {
        activeSortingType: action.payload,
      });
    case ActionType.SET_FAVORITES_DATA:
      return Object.assign({}, state, {
        favoritesData: action.payload,
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
