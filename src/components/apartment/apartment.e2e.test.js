import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Apartment from './apartment';

Enzyme.configure({adapter: new Adapter()});

const title = `Beautiful & luxurious apartment at great location`;

it(`Click on title is correctly`, () => {
  const clickHandler = jest.fn();
  const apartment = shallow(
      <Apartment
        apartmentTitle={title}
        onTitleClick={clickHandler}
      />
  );

  const titleButton = apartment.find(`.place-card__name a`);
  titleButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
