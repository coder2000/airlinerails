// @flow
/* eslint-disable react/jsx-one-expression-per-line */

import * as React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarMenu,
  NavbarItem,
  NavbarLink,
  NavbarEnd,
  NavbarDropdown,
  NavbarDivider,
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

  constructor(props) {
    super(props);
    this.setActive = this.setActive.bind(this);
  }

  setActive() {
    this.setState(previous => ({
      isActive: !previous.isActive,
    }));
  }

  render() {
    const { isActive } = this.state;

    return (
      <Navbar className="is-info">
        <NavbarBrand>
          <NavbarItem>The Airline</NavbarItem>
          <NavbarBurger isActive={isActive} onClick={this.setActive} />
        </NavbarBrand>
        <NavbarMenu isActive={isActive}>
          <NavbarItem href="/">Home</NavbarItem>
          <NavbarItem href="/about">About</NavbarItem>
          <NavbarEnd>
            <NavbarItem hasDropdown isHoverable>
              <NavbarLink>
                <FontAwesomeIcon icon="cog" />
              </NavbarLink>
              <NavbarDropdown className="is-right" isBoxed>
                <NavbarItem href="/login">Login</NavbarItem>
                <NavbarDivider />
                <NavbarItem href="/settings">Settings</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}
