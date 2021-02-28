import { shallow } from 'enzyme';
import React from 'react';
import Input from './Input';

describe('<Input />', () => {
  it('Element is defined', () => {
    const wrapper = shallow(<Input name="name" />);
    expect(wrapper).toBeDefined();
  });
});
