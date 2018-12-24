// @flow
/* eslint react/jsx-one-expression-per-line: off */

import * as React from 'react';
import {
  Hero, HeroHeader, HeroBody, HeroFooter, Container, Title, Button,
} from 'bloomer';

export default function Home() {
  return (
    <Hero isSize="medium" isColor="dark" isFullHeight>
      <HeroHeader>
        <div>The Airline</div>
      </HeroHeader>
      <HeroBody>
        <Container hasTextAlign="centered">
          <Title>The Airline</Title>
        </Container>
      </HeroBody>
      <HeroFooter style={{ marginBottom: '10vh' }}>
        <Container hasTextAlign="centered">
          <Button isColor="info" isSize="large">
            Get Started
          </Button>
        </Container>
      </HeroFooter>
    </Hero>
  );
}
