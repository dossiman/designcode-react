import React, { FC } from 'react';
// import Header from './header';
// import Footer from './footer';
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core';
import theme from '../gatsby-theme-material-ui-top-layout/theme';
import { ThemeProvider } from 'styled-components';

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

export default Layout;
