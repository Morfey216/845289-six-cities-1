import {citiesData, offersDataKit} from './mocks/offers';

const getCurrentOffersData = (city, offersData) => {
  const offers = offersData.filter((offer) => offer.city.name === city);
  console.log(city);
  console.log(offers);
  return offers;
};

const initialState = {
  currentCity: citiesData[0].name,
  currentOffersData: getCurrentOffersData(citiesData[0].name, offersDataKit),
  citiesData
};

const ActionCreator = {
  CHANGE_CURRENT_CITY: (currentCity) => ({
    type: `CHANGE_CURRENT_CITY`,
    payload: currentCity,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CURRENT_CITY`: return Object.assign({}, state, {
      currentCity: action.payload,
      currentOffersData: getCurrentOffersData(action.payload),
    });
  }
  return state;
};

export {
  ActionCreator,
  getCurrentOffersData,
  reducer,
};
