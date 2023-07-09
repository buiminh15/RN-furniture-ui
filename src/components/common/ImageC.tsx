import React from 'react';
import {ImageProps, ImageStyle} from 'react-native';
import FastImage from 'react-native-fast-image';
import {s} from 'react-native-size-matters';
import {SIZES} from '../../../constants';

export const rounded = {
  sm: {borderRadius: SIZES.base} as ImageStyle,
  md: {borderRadius: SIZES.radius} as ImageStyle,
  lg: {borderRadius: SIZES.font} as ImageStyle,
  xl: {borderRadius: SIZES.padding} as ImageStyle,
};

export const sizes = {
  sm: {width: s(50), height: s(50)} as ImageStyle,
  md: {width: s(126), height: s(128)} as ImageStyle,
  lg: {width: s(85), height: s(85)} as ImageStyle,
  rect: {width: s(145), height: s(218)} as ImageStyle,
};

type RoundedType = keyof typeof rounded;
type SizeType = keyof typeof sizes;

export type ImageCProps = ImageProps & {
  roundedType?: RoundedType;
  sizeType?: SizeType;
};

const ImageC = (props: ImageCProps) => {
  const {roundedType = 'xl', sizeType = 'lg', style, source} = props;
  const imageStyle = [rounded[roundedType], sizes[sizeType], style];
  return <FastImage style={imageStyle as any} source={source as any} />;
};

export default ImageC;
