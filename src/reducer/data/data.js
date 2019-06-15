const ActionType = {
  LOAD_OFFERS_DATA: `LOAD_OFFERS_DATA`,
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
};

const initialState = {
  offersDataKit: [],
  citiesData: [],
  currentCity: ``,
};

const ActionCreator = {
  loadOffersData: (offersDataKit) => ({
    type: ActionType.LOAD_OFFERS_DATA,
    payload: offersDataKit,
  }),
  changeCurrentCity: (currentCity) => ({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: currentCity,
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

const createCitiesData = (offersData) => {
  const cities = new Set();
  offersData.forEach((offer) => cities.add(offer.city.name));
  return [...cities];
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS_DATA: return Object.assign({}, state, {
      offersDataKit: action.payload,
      citiesData: createCitiesData(action.payload),
      // currentCity: getCitiesData[0].name,
    });
    case ActionType.CHANGE_CURRENT_CITY: return Object.assign({}, state, {
      currentCity: action.payload,
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
