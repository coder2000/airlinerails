// @flow

import * as React from 'react';

type Game = {
  inGame: boolean,
  toggleGame: (value: boolean) => mixed,
};

const GameContext = React.createContext<Game>({});

export default GameContext;
