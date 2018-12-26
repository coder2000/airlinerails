// @flow

import * as React from 'react';
import GameContext from '../contexts';

type Props = {};

export default class NewGame extends React.Component<Props> {
  static contextType = GameContext;

  componentDidMount() {
    const { toggleGame } = this.context;

    toggleGame();
  }

  render() {
    return <div>New Game</div>;
  }
}
