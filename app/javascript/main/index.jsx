// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

if (root !== null) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<div>Hello world</div>, root);
  });
}
