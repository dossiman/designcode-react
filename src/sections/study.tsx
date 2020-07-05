import React, { Component, FC } from 'react';

import { Typography } from '@material-ui/core';
import { Column, Row, Section } from '../components/layout';
import SectionIcon from '../components/section-icon';
import GradientText from '../components/gradient-text';

const Card: FC<{
  icon: Component;
  color: string;
  header: string;
  content: string;
  image: Component;
}> = ({ icon, color, header, content, image }) => (
  <Column alignItems="center" spacing={2}>
    <SectionIcon icon={icon} background={color} />
    <GradientText variant="h3" gradient={color}>
      {header}
    </GradientText>
    <Typography variant="body1">{content}</Typography>
    {image}
  </Column>
);

const StudySection: FC = () => {
  return (
    <Section>
      <Column spacing={4} alignItems="center">
        <Typography variant="h1" color="primary" align="center">
          Study smarter.
        </Typography>
        <Typography variant="h5" align="center" style={{ width: '40%' }}>
          Kanjis aren’t a bunch of random strokes, they are made up of simpler
          elements. Stop cramming, we got <b>better methods</b>.
        </Typography>
        <Row spacing={4} pt={4}>
          <Card
            icon={require('../images/flask.svg')}
            color="rareGradient1"
            header="Formula"
            content="As easy as 1 + 1."
            image={
              <img
                width="324"
                height="88"
                src={require('../images/formula-card.png')}
                alt="Formula example"
              />
            }
          />
          <Card
            icon={require('../images/graph.svg')}
            color="uncommonGradient1"
            header="Graph"
            content="For visual learners."
            image={
              <img
                width="247"
                height="238"
                src={require('../images/graph-card.png')}
                alt="Graph example"
              />
            }
          />
          <Card
            icon={require('../images/brain.svg')}
            color="commonGradient1"
            header="Mnemonic"
            content="Stories to tie everything together."
            image={
              <img
                width="378"
                height="125"
                src={require('../images/mnemonic-card.png')}
                alt="Mnemonic example"
              />
            }
          />
        </Row>
      </Column>
    </Section>
  );
};

export default StudySection;
