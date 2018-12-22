// @flow

import * as React from 'react';
import { shallow } from 'enzyme';
import App from 'main/components/App';

describe('App component', () => {
  it('renders', () => {
    expect(shallow()).toBe('Hello from Home component');
  });
});
