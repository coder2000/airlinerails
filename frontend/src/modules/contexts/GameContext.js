// @flow

import * as React from 'react';

type Game = {
  inGame: boolean,
  toggleGame: () => mixed,
};

const GameContext = React.createContext<Game>({});

export default GameContext;
