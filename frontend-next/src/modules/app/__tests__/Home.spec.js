import * as React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

test('Home renders without error', () => {
  const home = shallow(<Home />);

  expect(home).toBeDefined();
});
