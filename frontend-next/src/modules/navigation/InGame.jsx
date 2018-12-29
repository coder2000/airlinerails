// @flow

import * as React from 'react';
import { Navbar, NavbarBrand, NavbarItem, NavbarBurger } from 'bloomer';

type Props = {};

type State = {
  isActive: boolean,
};

export default class InGame extends React.Component<Props, State> {
  state = {
    isActive: false,
  };

  setActive = () => {
    this.setState(previous => ({
      isActive: !previous.isActive,
    }));
  };

  render() {
    const { isActive } = this.state;

    return (
      <Navbar className="is-success is-fixed-top">
        <NavbarBrand>
          <NavbarItem href="/">The Airline</NavbarItem>
          <NavbarBurger isActive={isActive} onClick={this.setActive} />
        </NavbarBrand>
      </Navbar>
    );
  }
}
