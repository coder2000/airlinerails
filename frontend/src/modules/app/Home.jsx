// @flow
/* eslint-disable react/jsx-one-expression-per-line */

import * as React from 'react';
import {
  Hero, HeroBody, HeroFooter, Container, Title, Button,
} from 'bloomer';

export default function Home() {
  return (
    <Hero className="is-fullheight-with-navbar">
      <HeroBody>
        <Container hasTextAlign="centered">
          <Title>The Airline</Title>
        </Container>
      </HeroBody>
      <HeroFooter style={{ marginBottom: '10vh' }}>
        <Container hasTextAlign="centered">
          <Button isColor="info" isSize="large" href="/start">
            Get Started
          </Button>
        </Container>
      </HeroFooter>
    </Hero>
  );
}
