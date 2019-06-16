const ActionType = {
  LOAD_OFFERS_DATA: `LOAD_OFFERS_DATA`,
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
};

const initialState = {
  offersDataKit: [],
  currentCityIndex: 0,
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
    });
    case ActionType.CHANGE_CURRENT_CITY: return Object.assign({}, state, {
      currentCityIndex: action.payload,
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
