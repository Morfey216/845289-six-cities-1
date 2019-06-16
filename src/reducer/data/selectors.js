import {createSelector} from 'reselect';
import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.DATA;

export const getOffersDataKit = (state) => {
  return state[NAME_SPACE].offersDataKit;
};

export const getCurrentCityIndex = (state) => {
  return state[NAME_SPACE].currentCityIndex;
};

export const getCitiesData = createSelector(
    getOffersDataKit,
    (offersData) => {
      const citiesData = [];
      offersData.forEach((offer) => {
        if (!citiesData.find((city) => city.name === offer.city.name)) {
          citiesData.push(offer.city);
        }
      });
      return citiesData;
    }
);

export const getCurrentOffersData = createSelector(
    getCurrentCityIndex,
    getCitiesData,
    getOffersDataKit,
    (currentCityIndex, citiesData, offersData) => {
      const offers = offersData.filter((offer) => offer.city.name === citiesData[currentCityIndex].name);

      // console.log(currentCityIndex, citiesData, offersData, offers);
      return offers;
    }
);
