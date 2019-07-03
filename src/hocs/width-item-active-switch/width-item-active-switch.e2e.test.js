import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import widthItemActiveSwitch from './width-item-active-switch';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = widthItemActiveSwitch(MockComponent);
const mockIsItemActive = false;

it(`Switch active status is correctly`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.props().isItemActive).toEqual(mockIsItemActive);

  wrapper.props().hundlerItemClick();
  expect(wrapper.props().isItemActive).toEqual(!mockIsItemActive);
});
