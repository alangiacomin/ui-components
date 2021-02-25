import { shallow } from 'enzyme';
import React from 'react';
import Setup from './Submit';

jest.mock('formik', () => ({
  useHistory: jest.fn(),
  withRouter: () => (comp) => comp,
  useFormikContext: () => { isSubmitting: false }
}));

describe('<Setup />', () => {
  xit('Element is defined', () => {
    const wrapper = shallow(<Setup />);
    expect(wrapper).toBeDefined();
  });
});
