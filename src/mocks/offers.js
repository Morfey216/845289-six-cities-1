const TITLES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

const IMAGES = [
  `img/apartment-01.jpg`,
  `img/apartment-02.jpg`,
  `img/apartment-03.jpg`,
  `img/room.jpg`,
];

const CITIES = [
  {
    name: `Paris`,
    coordinates: [52.38333, 4.9]
  },
  {
    name: `Cologne`,
    coordinates: [52.38333, 4.9]
  },
  {
    name: `Brussels`,
    coordinates: [52.38333, 4.9]
  },
  {
    name: `Amsterdam`,
    coordinates: [52.38333, 4.9]
  },
  {
    name: `Hamburg`,
    coordinates: [52.38333, 4.9]
  },
  {
    name: `Dusseldorf`,
    coordinates: [52.38333, 4.9]
  },
];

const COORDINATES_KIT = [
  [52.3909553943508, 4.85309666406198],
  [52.3695553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198],
  [52.3709553943508, 4.939309666406198],
];

const MAX_OFFERS_COUNT = 5;

const Price = {
  MIN_COST: 50,
  MAX_COST: 200
};

let currentId = 0;

const getRandomInteger = (minNumber = 1, maxNumber = 100) => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;

const getItem = (array) => {
  const randomItemIndex = getRandomInteger(0, array.length);
  return array[randomItemIndex];
};

const getBooleanValue = () => {
  return (getRandomInteger() > 50);
};

const getOffersList = (number, currentCity) => {
  const resultList = [];

  while (resultList.length < number) {
    const newItem = {
      id: currentId,
      city: currentCity,
      title: getItem(TITLES),
      type: getRandomInteger() > 50 ? `Apartment` : `Private room`,
      image: getItem(IMAGES),
      price: getRandomInteger(Price.MIN_COST, Price.MAX_COST),
      rating: getRandomInteger(),
      isBookmarked: getBooleanValue(),
      isPremium: getBooleanValue(),
      coordinates: COORDINATES_KIT[resultList.length],
    };

    resultList.push(newItem);
    currentId++;
  }

  return resultList;
};

const initMockData = () => {
  let mocksData = [];
  CITIES.forEach((currentCity) => {
    const offersCount = getRandomInteger(0, MAX_OFFERS_COUNT);
    mocksData = mocksData.concat(getOffersList(offersCount, currentCity));
  });
  return mocksData;
};

const offersDataKit = initMockData();

export default offersDataKit;
