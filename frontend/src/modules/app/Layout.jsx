// @flow

import * as React from 'react';
import { Standard, InGame } from '../navigation';
import GameContext from '../contexts';

type Props = {
  children: React.Node,
};

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <div>
      <GameContext.Consumer>
        {game => (game.inGame ? <InGame /> : <Standard />)}
      </GameContext.Consumer>
      {children}
    </div>
  );
}
