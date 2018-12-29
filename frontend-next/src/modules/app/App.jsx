// @flow

import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PouchDB } from 'react-pouchdb/browser';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Home from './Home';
import Layout from './Layout';
import NewGame from '../game';
import loadIcons from '../icons';
import GameContext from '../contexts';

type Props = {};

type State = {
  inGame: boolean,
};

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

export default class App extends React.Component<Props, State> {
  state = {
    inGame: false,
  };

  constructor(props: Props) {
    super(props);
    loadIcons();

    this.toggleGame = this.toggleGame.bind(this);
  }

  toggleGame = (value: boolean) => {
    this.setState({
      inGame: value,
    });
  };

  render() {
    const { inGame } = this.state;
    const { toggleGame } = this;

    return (
      <PouchDB name="airline">
        <ApolloProvider client={client}>
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
        </ApolloProvider>
      </PouchDB>
    );
  }
}
