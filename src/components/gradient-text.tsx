import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const GradientText = styled(Typography)`
  background: ${({ theme, gradient }) => theme.color[gradient]};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default GradientText;
