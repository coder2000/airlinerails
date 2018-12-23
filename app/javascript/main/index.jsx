// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';

import { Database } from '@nozbe/watermelondb';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import schema from './models/schema';
import Airline from './models/Airline';

import { App } from './modules/app';

const adapter = new LokiJSAdapter({ schema });

const database = new Database({
  adapter,
  modelClasses: [Airline],
  actionsEnabled: true,
});

const root = document.getElementById('root');

if (root !== null) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <DatabaseProvider database={database}>
        <App />
      </DatabaseProvider>,
      root,
    );
  });
}
