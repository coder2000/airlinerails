// @flow

import * as React from 'react';

type Game = {
  inGame: boolean,
  toggleGame: () => {},
};

const GameContext = React.createContext<Game>({});

export default GameContext;
