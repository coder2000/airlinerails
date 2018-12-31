import * as React from 'react';
import { shallow } from 'enzyme';
import Loading from '../Loading';

test('Loading component renders without error', () => {
  const loading = shallow(<Loading />);

  expect(loading).toMatchSnapshot();
});
