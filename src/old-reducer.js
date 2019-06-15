// import offersDataKit from './mocks/offers';
// import api from "./api";

const ActionType = {
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
  LOAD_OFFERS_DATA: `LOAD_OFFERS_DATA`,
};

const getCitiesData = (offersData) => {
  const cities = new Set();
  offersData.forEach((offer) => cities.add(offer.city));
  return [...cities];
};

const getCurrentOffersData = (city, offersData) => {
  const offers = offersData.filter((offer) => offer.city.name === city);
  return offers;
};

// const citiesDataKit = getCitiesData(offersDataKit);

const initialState = {
  offersDataKit: [],
  citiesData: [],
  currentCity: ``,
  currentOffersData: [],
};

const ActionCreator = {
  changeCurrentCity: (currentCity) => ({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: currentCity,
  }),

  loadOffersData: (offersDataKit) => ({
    type: ActionType.LOAD_OFFERS_DATA,
    payload: offersDataKit,
  }),
};

const Operation = {
  loadOffersData: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((responce) => {
        dispatch(ActionCreator.loadOffersData(responce.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_CITY: return Object.assign({}, state, {
      currentCity: action.payload,
      currentOffersData: getCurrentOffersData(action.payload, offersDataKit),
    });

    case ActionType.LOAD_OFFERS_DATA: return Object.assign({}, state, {
      offersDataKit: action.payload,
    });
  }
  return state;
};

export {
  ActionCreator,
  Operation,
  ActionType,
  getCurrentOffersData,
  // citiesDataKit,
  reducer,
};
