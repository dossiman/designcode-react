import React, { FC } from 'react';

import { Typography } from '@material-ui/core';
import { Column, Row, Section } from '../components/layout';
import SectionIcon from '../components/section-icon';

const LevelSection: FC = () => (
  <Section height={640} background="commonGradient2" skewedTop skewedBottom>
    <Row spacing={4} color="white" pt={16} justifyContent="space-evenly">
      <Column spacing={4} alignItems="center" flexBasis="45%">
        <SectionIcon
          icon={require('../images/level.svg')}
          background="uncommonReverseGradient1"
        />
        <Typography variant="h1" align="center">
          Level up.
        </Typography>
        <Typography variant="h5" align="center">
          Need more guidance with the basics or want to dig deeper? We got you
          covered.
          <p>
            Interface and content <b>adapt to your level</b>. Choose one of the
            preconfigured profiles or customize your own.
          </p>
        </Typography>
      </Column>
      <img
        width="335"
        height="380"
        src={require('../images/levels.png')}
        alt="Levels"
      />
    </Row>
  </Section>
);

export default LevelSection;
