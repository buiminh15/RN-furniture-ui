import {Dimensions} from 'react-native';
import {ms} from 'react-native-size-matters';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#4C4DDC',
  opacityPrimary: 'rgba(76,77,220, 0.1)',
  opacityGray: 'rgba(135,135,135, 0.3)',
  // colors
  black: '#101010',
  white: '#FFFFFF',
  lightGray: '#eff2f5',
  gray: '#878787',
  yellow: '#FFD33C',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Roboto-Black', fontSize: ms(SIZES.h1), lineHeight: ms(36)},
  h2: {fontFamily: 'Roboto-Bold', fontSize: ms(SIZES.h2), lineHeight: ms(30)},
  h3: {fontFamily: 'Roboto-Bold', fontSize: ms(SIZES.h3), lineHeight: ms(22)},
  h4: {fontFamily: 'Roboto-Bold', fontSize: ms(SIZES.h4), lineHeight: ms(22)},
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: ms(SIZES.body1),
    lineHeight: ms(36),
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: ms(SIZES.body2),
    lineHeight: ms(30),
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: ms(SIZES.body3),
    lineHeight: ms(22),
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: ms(SIZES.body4),
    lineHeight: ms(22),
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
