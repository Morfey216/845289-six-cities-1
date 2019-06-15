const ActionType = {
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
};

const getCurrentOffersData = (city, offersData) => {
  const offers = offersData.filter((offer) => offer.city.name === city);
  return offers;
};

const initialState = {
  currentCity: ``,
  currentOffersData: [],
};

const ActionCreator = {
  changeCurrentCity: (currentCity) => ({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: currentCity,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_CITY: return Object.assign({}, state, {
      currentCity: action.payload,
      currentOffersData: getCurrentOffersData(action.payload, offersDataKit),
    });
  }
  return state;
};

export {
  ActionCreator,
  ActionType,
  getCurrentOffersData,
  reducer,
};
