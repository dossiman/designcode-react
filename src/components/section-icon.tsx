import styled from 'styled-components';
import React, { FC } from 'react';
import { SvgIcon } from '@material-ui/core';

const SectionIconStyle = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  background: ${({ theme, background }) => theme.color[background]};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: ${({ size }) => size / 2}px;
`;

const SectionIcon: FC<{
  icon: React.Component;
  background: string;
  size?: number;
}> = ({ icon, background, size = 128 }) => (
  <SectionIconStyle background={background} size={size}>
    <SvgIcon component={icon} fontSize="inherit" />
  </SectionIconStyle>
);

export default SectionIcon;
