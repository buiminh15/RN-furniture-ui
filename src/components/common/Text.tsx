import React from 'react';
import {Text as DefaultText, TextProps, TextStyle} from 'react-native';
import {commonStyles} from '../../styles/commonStyles';
import {COLORS, FONTS} from '../../../constants';

export const textBase = {
  sm: FONTS.body4 as TextStyle,
  md: FONTS.body3 as TextStyle,
  lg: FONTS.body2 as TextStyle,
  xl: FONTS.body1 as TextStyle,
  headingSm: FONTS.h4 as TextStyle,
  headingMd: FONTS.h3 as TextStyle,
  headingLg: FONTS.h2 as TextStyle,
  headingXl: FONTS.h1 as TextStyle,
};

export const textBaseColor = {
  white: {color: COLORS.white} as TextStyle,
  black: {color: COLORS.black} as TextStyle,
  primary: {color: COLORS.primary} as TextStyle,
  gray: {color: COLORS.gray} as TextStyle,
  lightGray: {color: COLORS.lightGray} as TextStyle,
  red: {color: 'red'} as TextStyle,
};

type TextBaseType = keyof typeof textBase;
type TextBaseColorType = keyof typeof textBaseColor;

export type TextBaseProps = TextProps & {
  textBaseType?: TextBaseType;
  textBaseColorType?: TextBaseColorType;
  textCenter?: boolean;
};

const Text = (props: TextBaseProps) => {
  const {
    textBaseType = 'md',
    textBaseColorType = 'white',
    style,
    textCenter,
    ...otherProps
  } = props;
  const textStyle = [
    textBase[textBaseType],
    textBaseColor[textBaseColorType],
    textCenter && commonStyles.textCenter,
    style,
  ];
  return <DefaultText style={textStyle} {...otherProps} />;
};

export default Text;
