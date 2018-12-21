// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = document.getElementById('root');

if (root !== null) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, root);
  });
}
