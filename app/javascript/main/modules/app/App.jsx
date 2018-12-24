// @flow

import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { PouchDB } from 'react-pouchdb/browser';
import Home from './Home';

export default function App() {
  return (
    <PouchDB name="airline">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </PouchDB>
  );
}
