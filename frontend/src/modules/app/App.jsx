// @flow

import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PouchDB } from 'react-pouchdb/browser';
import Home from './Home';
import Layout from './Layout';
import NewGame from '../game';
import loadIcons from '../icons';
import GameContext from '../contexts';

type Props = {};

type State = {
  inGame: boolean,
  toggleGame: () => mixed,
};

export default class App extends React.Component<Props, State> {
  state = {
    inGame: false,
    toggleGame: this.toggleGame,
  };

  constructor(props: Props) {
    super(props);
    loadIcons();

    this.toggleGame = this.toggleGame.bind(this);
  }

  toggleGame = () => {
    this.setState(previous => ({
      inGame: !previous.inGame,
    }));
  };

  render() {
    const { inGame, toggleGame } = this.state;

    return (
      <PouchDB name="airline">
        <GameContext.Provider value={{ inGame, toggleGame }}>
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/start" component={NewGame} />
              </Switch>
            </Router>
          </Layout>
        </GameContext.Provider>
      </PouchDB>
    );
  }
}
