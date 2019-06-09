import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);
const mockActiveItem = `activeItem`;

it(`Change activeItem is correctly`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.props().activeItem).toEqual(null);

  wrapper.props().setActiveItem(mockActiveItem);
  expect(wrapper.props().activeItem).toEqual(mockActiveItem);
});
