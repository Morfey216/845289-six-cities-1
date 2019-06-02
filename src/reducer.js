import offersDataKit from './mocks/offers';

const getCitiesData = (offersData) => {
  const cities = new Set();
  offersData.forEach((offer) => cities.add(offer.city));
  return [...cities];
};

const getCurrentOffersData = (city, offersData) => {
  const offers = offersData.filter((offer) => offer.city.name === city);
  return offers;
};

const citiesDataKit = getCitiesData(offersDataKit);

const initialState = {
  citiesData: citiesDataKit,
  currentCity: citiesDataKit[0].name,
  currentOffersData: getCurrentOffersData(citiesDataKit[0].name, offersDataKit),
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
      currentOffersData: getCurrentOffersData(action.payload, offersDataKit),
    });
  }
  return state;
};

export {
  ActionCreator,
  getCurrentOffersData,
  reducer,
};
