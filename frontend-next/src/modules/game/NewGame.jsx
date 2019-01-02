// @flow

import * as React from 'react';
import {
  Container,
  Column,
  Columns,
  Box,
  Field,
  Label,
  Control,
  Input,
  Title,
} from 'bloomer';
import { Loading } from '../app';
import GameContext from '../contexts';
import CountrySelect from './CountrySelect';

type Props = {};

type State = {
  countryCode: string,
};

export default class NewGame extends React.Component<Props, State> {
  static contextType = GameContext;

  state = {
    countryCode: '',
  };

  componentWillMount() {
    const { toggleGame } = this.context;

    this.countrySelected = this.countrySelected.bind(this);
    toggleGame(true);
  }

  countrySelected = (code: string) => {
    this.setState({ countryCode: code });
  };

  render() {
    const { countryCode } = this.state;

    return (
      <Container style={{ marginTop: '10vh' }}>
        <Columns isCentered>
          <Column isSize="2/3">
            <Box>
              Welcome, stranger. So you want to start an airline, well you have
              come to the right place. Tell us a bit about your new venture.
            </Box>
          </Column>
        </Columns>
        <Columns isCentered>
          <React.Suspense fallback={<Loading />}>
            <Column isSize="1/3">
              <Title isSize={4}>Airline</Title>
              <Field>
                <Label>Name</Label>
                <Control>
                  <Input type="text" />
                </Control>
              </Field>
              <CountrySelect onCountrySelected={this.countrySelected} />
              Selected Country: {countryCode}
            </Column>
          </React.Suspense>
          <Column isSize="1/3">
            <Title isSize={4}>Owner</Title>
            <Field>
              <Label>Name</Label>
              <Control>
                <Input type="text" />
              </Control>
            </Field>
            <Field>
              <Label>Username</Label>
              <Control>
                <Input type="text" />
              </Control>
            </Field>
            <Field>
              <Label>E-mail</Label>
              <Control>
                <Input type="email" />
              </Control>
            </Field>
          </Column>
        </Columns>
      </Container>
    );
  }
}
