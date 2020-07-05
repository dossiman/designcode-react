import React, { FC } from 'react';

import { Typography } from '@material-ui/core';
import { Column, Row, Section } from '../components/layout';
import SectionIcon from '../components/section-icon';
import GradientText from '../components/gradient-text';

const ColorsSection: FC = () => {
  return (
    <Section>
      <Row spacing={4} justifyContent="space-evenly">
        <Column spacing={4} alignItems="center">
          <SectionIcon
            icon={require('../images/diamond.svg')}
            background="commonGradient4"
          />
          <GradientText variant="h1" gradient="commonGradient4" align="center">
            Color Coded.
          </GradientText>
          <Typography variant="h5" align="center">
            All kanjis, readings and words are ranked and{' '}
            <b>color coded by frequency</b> of usage.
            <p>
              Instantly identify what is commonly used and focus on what
              matters.
            </p>
          </Typography>
        </Column>
        <img
          width="563"
          height="472"
          src={require('../images/color-legend.png')}
          alt="Colors Legend"
        />
      </Row>
    </Section>
  );
};

export default ColorsSection;
