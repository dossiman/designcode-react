import React, { FC } from 'react';

import { Box, Typography } from '@material-ui/core';
import { Column, Row, Section } from '../components/layout';
import SectionIcon from '../components/section-icon';

const ReadSection: FC = () => (
  <Section height={680} background="uncommonGradient2" skewedTop skewedBottom>
    <Row spacing={4} color="white" pt={12} justifyContent="center">
      <Column spacing={4} alignItems="center" flexBasis="40%">
        <SectionIcon
          icon={require('../images/reader.svg')}
          background="uncommonReverseGradient2"
        />
        <Typography variant="h1" align="center">
          Read <i>real</i> Japanese.
        </Typography>
        <Typography variant="h5" align="center">
          Ditch your textbooks, we got better examples from the real world.
          <p>
            <i>Anime, drama, jpop, news, forums...</i> Learn from what you care
            about.
          </p>
        </Typography>
      </Column>
      <Column>
        <img
          width="393"
          height="138"
          src={require('../images/example-vegeta.png')}
          alt="Manga Quote"
        />
        <img
          style={{ marginLeft: 32 }}
          width="372"
          height="138"
          src={require('../images/example-kiseki.png')}
          alt="Jpop Lyric"
        />
        <img
          style={{ marginLeft: 64 }}
          width="371"
          height="212"
          src={require('../images/example-corona.png')}
          alt="News Quote"
        />
      </Column>
    </Row>
  </Section>
);

export default ReadSection;
