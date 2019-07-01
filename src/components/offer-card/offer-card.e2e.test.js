import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  id: 5,
  title: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  image: `img/apartment-01.jpg`,
  price: 0,
  rating: 100
};

it(`Click on image is correctly`, () => {
  const clickHandler = jest.fn();
  const offerCard = shallow(
      <OfferCard
        id={mock.id}
        title={mock.title}
        type={mock.type}
        image={mock.image}
        price={mock.price}
        rating={mock.rating}
        onTitleClick={clickHandler}
        onImageClick={clickHandler}
      />
  );

  const titleLink = offerCard.find(`.place-card__image`);
  titleLink.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
