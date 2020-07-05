import React, { FC } from 'react';
// import Header from './header';
// import Footer from './footer';
import {
  Box,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core';
import theme from '../gatsby-theme-material-ui-top-layout/theme';
import styled, { ThemeProvider } from 'styled-components';
import { FlexboxProps } from '@material-ui/system';

const Layout: FC = ({ children }) => (
  <>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        {/*<Header />*/}
        <main>{children}</main>
        {/*<Footer>*/}
        {/*  Copyright © Cyril Clement 2020 - Terms of Service - Privacy Policy -*/}
        {/*  <a href="mailto:kanjiverse@gmail.com"> Email us</a>.*/}
        {/*</Footer>*/}
      </ThemeProvider>
    </MuiThemeProvider>
  </>
);

export interface RowColProps extends FlexboxProps {
  spacing?: number;
}

const RowStyle = styled(Box)`
  margin: 0 ${({ theme, spacing = 0 }) => -theme.spacing(spacing) / 2}px;
  > * {
    margin: 0 ${({ theme, spacing = 0 }) => theme.spacing(spacing) / 2}px;
  }
`;

export const Row: FC<RowColProps> = (props) => (
  <RowStyle {...props} display="flex" />
);

const ColumnStyle = styled(Box)`
  margin: ${({ theme, spacing = 0 }) => -theme.spacing(spacing) / 2}px 0;
  > * {
    margin: ${({ theme, spacing = 0 }) => theme.spacing(spacing) / 2}px 0;
  }
`;

export const Column: FC<RowColProps> = (props) => (
  <ColumnStyle {...props} display="flex" flexDirection="column" />
);

export const SectionParent: FC<{ height: number }> = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  height: ${({ height }) => height}px;
`;

interface SectionBackgroundProps {
  height: number;
  background: string;
  skewedTop?: boolean;
  skewedBottom?: boolean;
}

export const SectionBackground: FC<SectionBackgroundProps> = styled.div`
  position: absolute;
  width: 100%;
  height: ${({ height }) => height}px;
  clip-path: polygon(
    0 ${({ theme, skewedTop }) => (skewedTop ? theme.spacing(8) : 0)}px,
    0 ${({ height }) => height}px,
    100%
      ${({ theme, height, skewedBottom }) =>
        height - (skewedBottom ? theme.spacing(8) : 0)}px,
    100% 0
  );
  background: ${({ theme, background }) => theme.color[background]};
`;

export const SectionContainer = styled.div`
  ${({ absolute }) => absolute && 'position: absolute;'};
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 ${({ theme, gutter }) => theme.spacing(gutter)}px;
  max-width: ${({ theme, maxWidth }) => theme.breakpoints.width(maxWidth)}px;
`;

interface SectionProps {
  height?: number;
  background?: string;
  skewedTop?: boolean;
  skewedBottom?: boolean;
}

export const Section: FC<SectionProps> = ({ children, ...props }) => (
  <SectionParent height={props.height}>
    {props.height && props.background && <SectionBackground {...props} />}
    <SectionContainer maxWidth="md" gutter={8} absolute={props.height != null}>
      {children}
    </SectionContainer>
  </SectionParent>
);

export const SectionDivider = styled.div`
  height: ${({ theme, spacing = 8 }) => theme.spacing(spacing)}px;
`;

export default Layout;
