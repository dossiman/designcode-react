import styled from 'styled-components';
import React, { FC } from 'react';
import KanjiverseSVG from '../images/kanjiverse-logo.svg';
import { Typography } from '@material-ui/core';

const KanjiverseLogoGroup = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin: 0 4px;
  }
`;

const KanjiverseLogo: FC = () => (
  <KanjiverseLogoGroup>
    <KanjiverseSVG />
    <Typography variant="h3" color="textSecondary" display="inline">
      Kanjiverse
    </Typography>
  </KanjiverseLogoGroup>
);

export default KanjiverseLogo;
