// @flow

import * as React from 'react';
import {
  Container, Column, Columns, Box, Field, Label, Control, Input, Title,
} from 'bloomer';
import GameContext from '../contexts';

type Props = {};

export default class NewGame extends React.Component<Props> {
  static contextType = GameContext;

  componentWillMount() {
    const { toggleGame } = this.context;

    toggleGame(true);
  }

  render() {
    return (
      <Container style={{ marginTop: '10vh' }}>
        <Columns isCentered>
          <Column isSize="2/3">
            <Box>
              Welcome, stranger. So you want to start an airline, well you have come to the right
              place. Tell us a bit about your new venture.
            </Box>
          </Column>
        </Columns>
        <Columns isCentered>
          <Column isSize="1/3">
            <Title isSize={4}>Airline</Title>
            <Field>
              <Label>Name</Label>
              <Control>
                <Input type="text" />
              </Control>
            </Field>
          </Column>
          <Column isSize="1/3">
            <Title isSize={4}>Owner</Title>
            <Field>
              <Label>Name</Label>
              <Control>
                <Input type="text" />
              </Control>
            </Field>
          </Column>
        </Columns>
      </Container>
    );
  }
}
