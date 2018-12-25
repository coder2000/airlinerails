// @flow

import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PouchDB } from 'react-pouchdb/browser';
import Home from './Home';
import NewGame from '../game';
import loadIcons from '../icons';

export default function App() {
  loadIcons();

  return (
    <PouchDB name="airline">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/start" component={NewGame} />
        </Switch>
      </Router>
    </PouchDB>
  );
}
