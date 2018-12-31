// @flow

import * as React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('Home', () => {
  it('should render without error', () => {
    const home = shallow(<Home />);

    expect(home).toMatchSnapshot();
  });
});
