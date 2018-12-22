// @flow

import * as React from 'react';
import { shallow } from 'enzyme';
import App from 'main/components/App';

describe('App component', () => {
  it('should render without error', () => {
    expect(shallow(<App />).exists()).toBe(true);
  });
});
