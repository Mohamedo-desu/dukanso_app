export const Colors = {
  primary: {
    100: '#CCEACB',
    200: '#B3E0B1',
    300: '#90D18E',
    400: '#7BC978',
    500: '#5ABB56',
  },
  lightGray: {
    500: '#9E9E9E',
    400: '#BDBDBD',
    300: '#E0E0E0',
    200: '#EEEEEE',
    100: '#F5F5F5',
    50: '#fafafa',
  },
  darkGray: {
    500: '#B0B0B0',
    400: '#8A8A8A',
    300: '#545454',
    200: '#333333',
    100: '#1B1B1B',
    50: '#1b1a1a',
  },

  white: '#FAFAFA',
  black: '#151201',
  success: '#5ABB56',
  error: '#8b2121',
  warning: '#ad9e13',
  disliked: '#c95353',
} as const;

const margins = {
  sm: 2,
  md: 4,
  lg: 8,
  xl: 12,
};
export const lightTheme = {
  colors: {
    typography: '#151201',
    background: '#FAFAFA',
    gray: {
      500: '#9E9E9E',
      400: '#BDBDBD',
      300: '#E0E0E0',
      200: '#EEEEEE',
      100: '#F5F5F5',
      50: '#fafafa',
    },
    ...Colors,
  },

  margins,
} as const;

export const darkTheme = {
  colors: {
    typography: '#FAFAFA',
    background: '#151201',
    gray: {
      500: '#B0B0B0',
      400: '#8A8A8A',
      300: '#545454',
      200: '#333333',
      100: '#1B1B1B',
      50: '#1b1a1a',
    },
    ...Colors,
  },

  margins,
} as const;
