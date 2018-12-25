// @flow
/* eslint-disable react/jsx-one-expression-per-line */

import * as React from 'react';
import {
  Hero, HeroHeader, HeroBody, HeroFooter, Container, Title, Button,
} from 'bloomer';
import Navigation from '../navigation';

export default function Home() {
  return (
    <Hero isSize="medium" isFullHeight>
      <HeroHeader>
        <Navigation />
      </HeroHeader>
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
