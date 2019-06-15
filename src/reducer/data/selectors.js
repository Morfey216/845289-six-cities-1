import {createSelector} from 'reselect';
import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.DATA;

export const getOffersDataKit = (state) => {
  console.log(state);
  console.log(state[NAME_SPACE].offersDataKit);
  return state[NAME_SPACE].offersDataKit;
};

export const getCurrentCity = (state) => {
  return state[NAME_SPACE].currentCity;
};

export const getCitiesData = createSelector(
    getOffersDataKit,
    (offersData) => {
      const cities = new Set();
      offersData.forEach((offer) => cities.add(offer.city));
      return [...cities];
    }
);

export const getCurrentOffersData = createSelector(
    getCurrentCity,
    getOffersDataKit,
    (city, offersData) => {
      const offers = offersData.filter((offer) => offer.city.name === city);
      console.log(offers);
      return offers;
    }
);
