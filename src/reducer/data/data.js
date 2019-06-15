const ActionType = {
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
};

const ActionCreator = {
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
    case ActionType.LOAD_OFFERS_DATA: return Object.assign({}, state, {
      offersDataKit: action.payload,
      citiesData: getCitiesData(action.payload),
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
