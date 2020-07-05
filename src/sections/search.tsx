import React, { FC } from 'react';

import { Typography } from '@material-ui/core';
import { Column, Row, Section } from '../components/layout';
import SectionIcon from '../components/section-icon';

const SearchSection: FC = () => (
  <Section height={640} background="uncommonGradient1" skewedTop skewedBottom>
    <Row spacing={4} color="white">
      <Column spacing={4} alignItems="center">
        <SectionIcon
          icon={require('../images/search.svg')}
          background="uncommonReverseGradient1"
        />
        <Typography variant="h1" align="center">
          Search assistance.
        </Typography>
        <Typography variant="h5" align="center">
          Smart search bar with <b>auto suggestions</b> to input kana, radicals
          and all kind of filters,
          <br />
          such as:
        </Typography>
        <Column alignItems="center">
          <Typography variant="subtitle1">
            Get the list of jōyō kanjis with radical 手:
          </Typography>
          <img
            width="219"
            height="64"
            src={require('../images/search-query1.png')}
            alt="Search Query Example 1"
          />
          <Typography variant="subtitle1">
            Find all common verbs in JLPT N3:
          </Typography>
          <img
            width="298"
            height="64"
            src={require('../images/search-query2.png')}
            alt="Search Query Example 2"
          />
        </Column>
      </Column>
      <img
        width="428"
        height="534"
        src={require('../images/search-example.png')}
        alt="Search Bar"
      />
    </Row>
  </Section>
);

export default SearchSection;
