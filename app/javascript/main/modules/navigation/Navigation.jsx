// @flow
/* eslint react/jsx-one-expression-per-line: off */

import * as React from 'react';
import {
  Navbar, NavbarBrand, NavbarBurger, NavbarMenu, NavbarItem,
} from 'bloomer';

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
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>About</NavbarItem>
        </NavbarMenu>
      </Navbar>
    );
  }
}
