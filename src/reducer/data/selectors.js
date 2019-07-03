import {createSelector} from 'reselect';
import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.DATA;
const ComparisonResult = {
  TRUE: 1,
  FALSE: -1
};

export const getOffersDataKit = (state) => {
  return state[NAME_SPACE].offersDataKit;
};

export const getCurrentCityIndex = (state) => {
  return state[NAME_SPACE].currentCityIndex;
};

export const getActiveOffer = (state) => {
  return state[NAME_SPACE].activeOffer;
};

export const getActiveSortingType = (state) => {
  return state[NAME_SPACE].activeSortingType;
};

export const getReviewsData = (state) => {
  return state[NAME_SPACE].reviewsData
    .sort((first, second) => (first.date < second.date) ? ComparisonResult.TRUE : ComparisonResult.FALSE);
};

export const getFavoritesData = (state) => {
  return state[NAME_SPACE].favoritesData;
};

export const getFavoritesCitiesData = createSelector(
    getFavoritesData,
    (favoritesData) => {
      const citiesData = [];
      favoritesData.forEach((offer) => {
        if (!citiesData.find((city) => city.name === offer.city.name)) {
          citiesData.push(offer.city);
        }
      });
      return citiesData;
    }
);

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
    getActiveSortingType,
    (currentCityIndex, citiesData, offersData, activeSortingType) => {
      const offers = offersData.filter((offer) => offer.city.name === citiesData[currentCityIndex].name);

      switch (activeSortingType) {
        case `Price: low to high`:
          offers.sort((first, second) => first.price - second.price);
          break;
        case `Price: high to low`:
          offers.sort((first, second) => second.price - first.price);
          break;
        case `Top rated first`:
          offers.sort((first, second) => second.rating - first.rating);
          break;
        case `Popular`:
        default:
          offers.sort((first, second) => first.id - second.id);
      }

      return offers;
    }
);

export const getNearOffersData = createSelector(
    getCurrentOffersData,
    getActiveOffer,
    (offers, activeOffer) => {
      const activeIndex = offers.findIndex((offer) => offer === activeOffer);
      const nearOffersData = offers.slice();
      nearOffersData.splice(activeIndex, 1);

      return nearOffersData;
    }
);
