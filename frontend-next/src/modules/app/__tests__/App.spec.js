// @flow

import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import App from '../App';
import Home from '../Home';

describe('App', () => {
  it('should render home with url "/"', () => {
    const app = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    expect(app.find(Home)).toHaveLength(1);
  });
});
