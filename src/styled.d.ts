// import original module declarations
import 'styled-components';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

// and extend them!
declare module 'styled-components' {
  export type DefaultTheme = Theme;
}
