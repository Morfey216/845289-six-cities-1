import {offersDataModel} from "../../data-models";

const ActionType = {
  LOAD_OFFERS_DATA: `LOAD_OFFERS_DATA`,
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
};

const initialState = {
  offersDataKit: [],
  currentCityIndex: 0,
  activeOffer: null,
};

const ActionCreator = {
  loadOffersData: (offersDataKit) => ({
    type: ActionType.LOAD_OFFERS_DATA,
    payload: offersDataKit,
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
        const offersData = response.data.map((itData) => offersDataModel(itData));
        dispatch(ActionCreator.loadOffersData(offersData));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS_DATA:
      return Object.assign({}, state, {
        offersDataKit: action.payload,
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
