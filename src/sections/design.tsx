import React, { FC } from 'react';

import { SvgIcon, Typography } from '@material-ui/core';
import { Column, Row, Section } from '../components/layout';
import SectionIcon from '../components/section-icon';

const ListItem: FC = ({ children }) => (
  <Row alignItems="center" spacing={2}>
    <SvgIcon component={require('../images/check.svg')} color="primary" />
    <Typography variant="h5">{children}</Typography>
  </Row>
);

const DesignSection: FC = () => {
  return (
    <Section>
      <Row spacing={4} justifyContent="space-evenly">
        <img
          width="375"
          height="674"
          src={require('../images/cards-example.png')}
          alt="Card Samples"
        />
        <Column spacing={4} alignItems="center" flexBasis="40%">
          <SectionIcon
            icon={require('../images/stack.svg')}
            background="uncommonGradient1"
          />
          <Typography variant="h1" color="primary" align="center">
            Sleek design,
            <br />
            easy navigation.
          </Typography>
          <Typography variant="h5" align="center">
            Customizable cards show you the content you want, with a fresh and
            unclutered design.
          </Typography>
          <Column spacing={1}>
            <ListItem>13,000+ Kanjis</ListItem>
            <ListItem>180,000+ Definitions</ListItem>
            <ListItem>200,000+ Examples</ListItem>
          </Column>
        </Column>
      </Row>
    </Section>
  );
};

export default DesignSection;
