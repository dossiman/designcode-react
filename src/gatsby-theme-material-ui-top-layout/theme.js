import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 48,
      lineHeight: '120%',
      letterSpacing: -1.5,
    },
    h2: {
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 36,
      lineHeight: '140%',
      letterSpacing: -0.5,
    },
    h3: {
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 24,
      lineHeight: '140%',
    },
    h4: {
      fontFamily: '"Noto Sans JP", roboto, sans-serif',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 24,
      lineHeight: '140%',
    },
    h5: {
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 20,
      lineHeight: '140%',
      letterSpacing: 0.18,
    },
    h6: {
      fontFamily: '"Noto Sans JP", roboto, sans-serif',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 20,
      lineHeight: '140%',
      letterSpacing: 0.15,
    },
    subtitle1: {
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '140%',
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontFamily: '"Noto Sans JP", roboto, sans-serif',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '140%',
      letterSpacing: 0.1,
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 16,
      lineHeight: '130%',
      letterSpacing: 0.5,
    },
    body2: {
      fontFamily: '"Noto Sans JP", roboto, sans-serif',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 16,
      lineHeight: '130%',
      letterSpacing: 0.25,
    },
    button: {
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '150%',
      letterSpacing: 1.25,
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 12,
      lineHeight: '150%',
      letterSpacing: 0.4,
    },
    overline: {
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 10,
      lineHeight: '160%',
      letterSpacing: 1.5,
      textTransform: 'uppercase',
    },
  },
  palette: {
    primary: {
      main: '#661FFF',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
  },
  //   palette: {
  //     type: 'dark',
  //   },
});

export default theme;
