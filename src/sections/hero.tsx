import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

import { Column, Row, Section } from '../components/layout';
import KanjiverseLogo from '../components/kanjiverse-logo';
import CTA from '../components/cta';

const Hero: FC = () => {
  return (
    <Section height={640} background="uncommonGradient2" skewedBottom>
      <Row>
        <Column spacing={4} py={8} color="white">
          <KanjiverseLogo />
          <Typography variant="h1">
            Learn Kanjis.
            <br />
            Build your vocabulary.
            <br />
            Read <i>real</i> Japanese.
          </Typography>
          <Typography variant="h3">
            A new kind of Japanese dictionary for learners of all levels and
            beyond.
          </Typography>
          <Typography variant="body1" align="center">
            <b>Launching soon</b> to iOS, Android and web.
          </Typography>
          <CTA />
        </Column>
        <img
          width="347"
          height="683"
          src={require('../images/phone-mockup.png')}
          alt="Phone Mockup"
        />
      </Row>
    </Section>
  );
};

export default Hero;
