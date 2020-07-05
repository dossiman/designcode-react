import createMuiTheme, {
  Theme,
  ThemeOptions,
} from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Color {
    common: string;
    uncommon: string;
    rare: string;
    epic: string;
    legendary: string;
    heroGradient: string;
  }

  interface Theme {
    color: Color;
  }

  interface ThemeOptions {
    color?: Partial<Color>;
  }
}

const common = '#3F51B5';
const uncommon = '#661FFF';
const rare = '#D61FFF';
const epic = '#FF1FB8';
const legendary = '#FF661F';

const gradient = (colors: string[]) =>
  `linear-gradient(135deg, ${colors.join(', ')})`;

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
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 36,
      lineHeight: '140%',
      letterSpacing: -0.5,
    },
    h3: {
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
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '150%',
      letterSpacing: 1.25,
      textTransform: 'uppercase',
    },
    caption: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 12,
      lineHeight: '150%',
      letterSpacing: 0.4,
    },
    overline: {
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
  color: {
    common,
    uncommon,
    rare,
    epic,
    legendary,
    commonGradient1: gradient([common, uncommon]),
    commonGradient2: gradient([common, uncommon, rare]),
    commonGradient3: gradient([common, uncommon, rare, epic]),
    commonGradient4: gradient([common, uncommon, rare, epic, legendary]),
    uncommonGradient1: gradient([uncommon, rare]),
    uncommonReverseGradient1: gradient([rare, uncommon]),
    uncommonGradient2: gradient([uncommon, rare, epic]),
    uncommonGradient3: gradient([uncommon, rare, epic, legendary]),
    rareGradient1: gradient([rare, epic]),
    rareGradient2: gradient([rare, epic, legendary]),
    epicGradient1: gradient([epic, legendary]),
  },
});

export default theme;
