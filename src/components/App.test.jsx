import App from './App';

import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  test('should render with className', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').props().className).toBe('gerrit');
  });
});
