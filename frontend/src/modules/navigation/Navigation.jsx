// @flow
/* eslint react/jsx-one-expression-per-line: off */

import * as React from 'react';
import {
  Navbar, NavbarBrand, NavbarBurger, NavbarMenu, NavbarItem, NavbarEnd,
} from 'bloomer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {};

type State = {
  isActive: boolean,
};

export default class Navigation extends React.Component<Props, State> {
  state = {
    isActive: false,
  };

  setActive() {
    this.setState(previous => ({
      isActive: !previous.isActive,
    }));
  }

  render() {
    const { isActive } = this.state;

    return (
      <Navbar>
        <NavbarBrand>
          <NavbarBurger isActive={isActive} onClick={this.setActive} />
          <NavbarItem>The Airline</NavbarItem>
        </NavbarBrand>
        <NavbarMenu isActive={isActive}>
          <NavbarItem href="/">Home</NavbarItem>
          <NavbarItem>About</NavbarItem>
        </NavbarMenu>
        <NavbarEnd>
          <NavbarItem>
            <FontAwesomeIcon icon="cog" />
          </NavbarItem>
        </NavbarEnd>
      </Navbar>
    );
  }
}
