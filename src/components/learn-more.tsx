import { Box, SvgIcon, Typography } from '@material-ui/core';
import DownArrowIcon from '../images/down-arrow.svg';
import React, { FC } from 'react';

const LearnMore: FC = () => (
  <Box display="flex" justifyContent="center" alignItems="center">
    <SvgIcon color="primary" component={DownArrowIcon} />
    <Typography variant="overline" align="center" color="primary">
      Learn more
    </Typography>
    <SvgIcon color="primary" component={DownArrowIcon} />
  </Box>
);

export default LearnMore;
