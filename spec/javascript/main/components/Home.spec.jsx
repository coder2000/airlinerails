import * as React from 'react';
import { shallow } from 'enzyme';
import Home from 'main/components/Home';

describe('Home component', () => {
  it('renders without error', () => {
    expect(shallow(<Home />).exists()).toBe(true);
  });
});
