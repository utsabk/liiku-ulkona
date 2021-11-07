import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3C74C7',
    secondary: '#0183FB',
    grey: '#777777',
    lightGrey: '#C8C3C3',
    red: '#FF0000',
    white: '#FFFFFF',
    black: '#000000',
  },
  fontSizes: {
    small:12,
    body: 14,
    subheading: 16,
    heading: 18,
  },
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '500',
    bold: '700',
  },
};

export default theme;
