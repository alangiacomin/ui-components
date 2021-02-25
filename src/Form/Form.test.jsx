import { shallow } from 'enzyme';
import React from 'react';
import Form from './Form';

describe('<Form />', () => {
  it('Element is defined', () => {
    const wrapper = shallow(<Form>test</Form>);
    expect(wrapper).toBeDefined();
  });
});
